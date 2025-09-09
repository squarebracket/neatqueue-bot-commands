import * as https from 'https';
console.log('cold start');

type Event = {
  queryStringParameters: {
    server_id: string;
    uptime: string;
    user_id: string;
    server_name?: string;
  }
};

type MatchHistory = {
  data: GameData[];
}

type GameData = {
  game: string;
  time: string;
  teams: [
    Player[],
    Player[],
  ];
  team_names: string[];
  channel: string;
  queue_channel: string;
  guild_id: string;
  game_num: number;
  winner: number;
  matchdata: MatchMetaData[];
};

type Player = {
  name: string;
  id: string;
  mmr: number;
  captain: boolean;
  mmr_change: number;
  guild_id: string;
};

type MatchMetaData = [string, [string], string];

const request = <T>(url: string): Promise<T> => {
  let output = '';
  return new Promise((resolve, reject) => {
    const req = https.request(url, (res) => {
      res.setEncoding('utf8');

      res.on('data', (chunk) => {
        output += chunk;
      });

      res.on('end', () => {
        let obj = JSON.parse(output);
        if (res.statusCode !== 200) {
          reject(obj.errors);
        }
        resolve(obj);
      });
    });

    req.on('error', (err) => {
      console.log('error making request: ' + err.message);
    });

    req.end();

  });
}

export const handler = async (event: Event) => {
  const serverId = event.queryStringParameters.server_id;
  const userId = event.queryStringParameters.user_id;
  const uptime = event.queryStringParameters.uptime;
  const retName = event.queryStringParameters.server_name ?? 'pro city';

  const regex = /(?:(?<days>\d+) days?)?(?:(?: and)? |\s|,?\s)?(?:(?<hours>\d+) hours?)?(?:(?: and)? |\s|,\s)?(?:(?<minutes>\d+) min(?:ute)?s?)?(?:(?: and)? |\s)?(?:(?<seconds>\d+) sec(?:ond)?s?)?$/;
  const up = regex.exec(uptime);
  let streamStart = new Date(Date.now());
  streamStart.setUTCDate(streamStart.getUTCDate() - (parseInt(up?.groups?.days ?? '0')));
  streamStart.setUTCHours(streamStart.getUTCHours() - (parseInt(up?.groups?.hours ?? '0')));
  streamStart.setUTCMinutes(streamStart.getUTCMinutes() - (parseInt(up?.groups?.minutes ?? '0')) - 6); // adjust for games starting just before stream starts
  streamStart.setUTCSeconds(streamStart.getUTCSeconds() - (parseInt(up?.groups?.seconds ?? '0')));


  const url = `https://api.neatqueue.com/api/history/${serverId}?player_id=${userId}`;

  const matchHistory = (await request<MatchHistory>(url)).data;
  const r = [0, 0]; // 0 -> wins, 1 -> losses
  let lastMap: string;
  let lastWon: boolean;
  
  const matches = matchHistory
    .filter(m => new Date(`${m.time}Z`) > streamStart)
    .filter(m => m.winner !== null && m.winner > -1)
    .sort((a, b) => {
      return (new Date(a.time)).valueOf() - (new Date(b.time)).valueOf();
    });

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const t = match.teams.findIndex(ps => ps.some(p => p.id === userId));
    const w = match.winner;
    // increment XOR of player team and winning team
    r[t^w]++;
    if (i === matches.length - 1) {
      lastWon = !(t^w);
      lastMap = match.matchdata.find(md => md[0] === 'Map')[1][0];
    }
  }

  const playerName = (matchHistory[0].teams[0].find(p => p.id === userId) ?? matchHistory[0].teams[1].find(p => p.id === userId)).name;
  let message = `${playerName}'s record for ${retName} this stream is ${r[0]}W-${r[1]}L`;
  if (lastMap) {
    message += ` | Last map (${lastMap}): ${lastWon ? 'Win' : 'Loss'}`;
  }
  return {
    statusCode: 200,
    body: message,
  };

};