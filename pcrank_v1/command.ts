import * as https from 'https';
console.log('cold start');

type Event = {
  queryStringParameters: {
    queue_id: string;
    server_id: string;
    user_id: string;
    server_name?: string;
  }
};

type PlayerLeaderboardData = {
  mmr: number,
  wins: number;
  losses: number;
  streak: number;
  totalgames: number;
  decay: number;
  peak_mmr: number;
  peak_streak: number;
  rank: number;
  winrate: number; // decimal percentage
  current_rank: number;
};

type PlayerData = {
  id: string;
  data: PlayerLeaderboardData;
  name: string;
};

type LeaderboardResponse = {[key: string]: PlayerData[]};

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
          console.error(res);
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
  const queueId = event.queryStringParameters.queue_id;
  const userId = event.queryStringParameters.user_id;
  const retName = event.queryStringParameters.server_name ?? 'pro city';

  const url = `https://host.neatqueue.com/api/leaderboard/${serverId}/${queueId}`;
  console.log(url);

  const lb = await request<LeaderboardResponse>(url);

  console.log(Object.keys(lb));
  let k = Object.keys(lb).sort().slice(-2, -1)[0] ?? 'alltime';
  console.log(`key is ${k}`);
  if (!lb[k]) {
    return {
      statusCode: 200,
      message: 'no leaderboard data',
    }
  }
  const player = lb[k].find(pl => pl.id === userId);
  if (player) {
    const rank = player.data.current_rank;
    const message = `${player.name}'s ${retName} MMR is ${Math.round(player.data.mmr)}RR (Rank ${rank ? '#'+rank : '<none yet>'} on the leaderboard with ${player.data.wins} wins and ${player.data.losses} losses for ${k})`;
    const response = {
      statusCode: 200,
      body: message,
    };
    return response;
  } else {
    return {
      statusCode: 200,
      body: 'Player not found',
    };
  }

};