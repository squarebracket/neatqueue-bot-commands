NeatQueue Twitch Chat Commands
==============================

This repository has code for bot commands for NeatQueue queues. NeatQueue is the bot used by Pro City, Tricks Elite Circuit, and more to manage the queues. The AWS API (code stored in this repo) only really needs to be used for StreamElements/Fossabot, since Nightbot's commands won't time out.

If you're here to add commands for your streamer, read what's in [Required Info](#required-info) and then skip to the command for the queue/bot you want.

- [Required Info](#required-info)
- [Commands](#commands)
   * [Rank](#rank)
      + [Pro City](#pro-city)
         - [Fossabot](#fossabot)
         - [Nightbot](#nightbot)
         - [StreamElements](#streamelements)
      + [Tricks Elite Circuit](#tricks-elite-circuit)
         - [Fossabot](#fossabot-1)
         - [Nightbot](#nightbot-1)
         - [StreamElements](#streamelements-1)
   * [Teams](#teams)
      + [Pro City](#pro-city-1)
         - [Fossabot](#fossabot-2)
         - [Nightbot](#nightbot-2)
         - [StreamElements](#streamelements-2)
      + [Tricks Elite Circuit](#tricks-elite-circuit-1)
         - [Fossabot](#fossabot-3)
         - [Nightbot](#nightbot-3)
         - [StreamElements](#streamelements-3)
   * [Record This Stream](#record-this-stream)
      + [Pro City](#pro-city-2)
         - [Fossabot](#fossabot-4)
         - [Nightbot](#nightbot-4)
         - [StreamElements](#streamelements-4)
      + [Tricks Elite Circuit](#tricks-elite-circuit-2)
         - [Fossabot](#fossabot-5)
         - [Nightbot](#nightbot-5)
         - [StreamElements](#streamelements-5)
- [Reference](#reference)


# Required Info

For these commands, you'll need your streamer's discord ID, which requires your discord having dev options enabled. Open your user settings, click Advanced on the left, and toggle developer mode on. Then right click on your streamer on discord and click "Copy User ID". This is what you'll use to replace `DISCORD_ID` in the commands below. Note that this is **NOT** their @, it is a string of numbers like 695720531856719872.

# Commands

## Rank

The command displays the person's rank, leaderboard position, and wins and losses for the current leaderboard slice, or for all time if there is no current slice.

### Pro City

#### Fossabot

```!addcom !pcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1061301529597976700&queue_id=1404512069318873261)```

#### StreamElements

```!cmd add !pcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1061301529597976700&queue_id=1404512069318873261)```

#### Nightbot

```!addcom !pcrank $(touser) $(eval var d=$(urlfetch json https://host.neatqueue.com/api/leaderboard/1061301529597976700/1404512069318873261);var id='DISCORD_ID';let k=Object.keys(d).sort().slice(-2,-1)[0];var p=d[k].find(plyr=>plyr.id===id);if(p){let r=p.data.current_rank;`${p.name}'s pro city rank is ${Math.round(p.data.mmr)}RR (Rank ${r?'#'+r:'<none yet>'} on LB with ${p.data.wins} wins and ${p.data.losses} losses for ${k})`}else{'Player not found'}) -> https://procity.gg/leaderboard```

### Tricks Elite Circuit

#### Fossabot

```!addcom !pcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1285984148195905576&server_name=tricks%20elite%20circuit)```

#### StreamElements

```!cmd add !pcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1285984148195905576&server_name=tricks%20elite%20circuit)```

#### Nightbot

```!addcom !pcrank $(touser) $(eval var d=$(urlfetch json https://host.neatqueue.com/api/leaderboard/1264960696076992634/1285984148195905576);var id='DISCORD_ID';let k=Object.keys(d).sort().slice(-2,-1)[0] || 'alltime';var p=d[k].find(l=>l.id===id);if(p){let r=p.data.current_rank;`${p.name}'s Tricks Elite Circuit rank is ${Math.round(p.data.mmr)}RR (Rank ${r?'#'+r:'<none yet>'} on LB with ${p.data.wins} wins and ${p.data.losses} losses for ${k})`}else{'Player not found'})```

## Teams

Displays the two teams in the format `Team A: ... | Team B ...`.

### Pro City

#### Fossabot

```!addcom !pcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1061301529597976700)```

#### StreamElements

```!cmd add !pcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1061301529597976700)```

#### Nightbot

```!addcom !pcteams $(touser) $(eval var d=$(urlfetch json https://host.neatqueue.com/api/matches/1061301529597976700/);var id='DISCORD_ID';var m=Object.values(d).find(match=>match.players.some(p=>p.id===id));m?'Team A: '+m.teams[0].map(p=>p.name).join(', ')+' | Team B: '+m.teams[1].map(p=>p.name).join(', '):'Player not found in an active match.')```

### Tricks Elite Circuit

#### Fossabot

```!addcom !pcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

#### StreamElements

```!cmd add !pcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

#### Nightbot

```!addcom !pcteams $(touser) $(eval var d=$(urlfetch json https://host.neatqueue.com/api/matches/1264960696076992634/);var id='DISCORD_ID';var m=Object.values(d).find(match=>match.players.some(p=>p.id===id));m?'Team A: '+m.teams[0].map(p=>p.name).join(', ')+' | Team B: '+m.teams[1].map(p=>p.name).join(', '):'Player not found in an active match.')```

## Record This Stream

Shows the games won and lost on stream since stream started.

### Pro City

#### Fossabot

```!addcom !pcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1061301529597976700&uptime=$(uptime))```

#### StreamElements

```!cmd add !pcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1061301529597976700&uptime=$(uptime))```

#### Nightbot

Note there are two replacements here

```!addcom !pcrecord $(touser) $(eval let r=[0,0]; var d=$(urlfetch json https://api.neatqueue.com/api/history/1061301529597976700?player_id=DISCORD_ID);d.data.filter(m=>new Date(`${m.time}Z`)>new Date('$(twitch $(channel) "{{uptimeAt}}")')).filter(m=>m.winner!==null&&m.winner>-1).forEach(m=>{const t=m.teams.findIndex(ps=>ps.some(p=>p.id==='DISCORD_ID'));const w = m.winner;r[t^w]++}); `pro city record this stream: ${r[0]}W-${r[1]}L`)```

### Tricks Elite Circuit

#### Fossabot

```!addcom !pcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1264960696076992634&uptime=$(uptime)&server_name=tricks%20elite%20circuit)```

#### StreamElements

```!cmd add !pcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1264960696076992634&uptime=$(uptime)&server_name=tricks%20elite%20circuit)```

#### Nightbot

Note there are two replacements here

```!addcom !pcrecord $(touser) $(eval let r=[0,0]; var d=$(urlfetch json https://api.neatqueue.com/api/history/1061301529597976700?player_id=DISCORD_ID);d.data.filter(m=>new Date(`${m.time}Z`)>new Date('$(twitch $(channel) "{{uptimeAt}}")')).filter(m=>m.winner!==null&&m.winner>-1).forEach(m=>{const t=m.teams.findIndex(ps=>ps.some(p=>p.id==='DISCORD_ID'));const w = m.winner;r[t^w]++}); `tricks elite circuit record this stream: ${r[0]}W-${r[1]}L`)```


# Reference

Here's a reference of the server id and queue id for the queues I know about:

| Queue                          | SERVER_ID           | QUEUE_ID            |
| Pro City                       | 1061301529597976700 | 1404512069318873261 |
| Tricks Elite Circuit Pro Queue | 1264960696076992634 | 1285984148195905576 |