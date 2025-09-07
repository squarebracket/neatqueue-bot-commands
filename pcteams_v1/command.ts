import * as https from 'https';
console.log('cold start');

type Event = {
  queryStringParameters: {
    server_id: string;
    user_id: string;
  }
};

type Player = {
  name: string;
  id: string;
  mmr: number;
  captain: boolean;
  mmr_change: number;
  guild_id: string;
};

type MatchData = {
  channel_id: string;
  queue_channel_id: string;
  teams: [
    Player[],
    Player[],
  ];
  players: Player[];
}

type MatchesResponse = {[key: string]: MatchData};

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

  const url = `https://host.neatqueue.com/api/matches/${serverId}/`;

  const matches = (await request<MatchesResponse>(url));

  const match = Object.values(matches).find(m => m.players.find(p => p.id === userId));
  console.log(match);

  if (match) {
    const teamAPlayers = match.teams[0].map(p => p.name).join(', ');
    const teamBPlayers = match.teams[1].map(p => p.name).join(', ');
    const message = `Team A: ${teamAPlayers} | Team B: ${teamBPlayers}`;
    console.log(message);
    return {
      statusCode: 200,
      body: message,
    };
  } else {
    return {
      statusCode: 200,
      body: 'Player not found in active match',
    };
  }

};