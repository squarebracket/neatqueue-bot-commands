NeatQueue Twitch Chat Commands
==============================

This repository has cloud resource config and code for an API for NeatQueue queues that can be used directly by twitch bots. NeatQueue is the bot used by Pro City, Tricks Elite Circuit, and many more to manage customs queues.

If you're here to add commands for your streamer, read what's in [Required Info](#required-info) to get their user ID and then skip to the snippets for the queue/bot you need.

- [Command Snippet Quick Reference](#command-snippet-quick-reference)
  * [Pro City](#pro-city)
    + [Fossabot](#fossabot)
    + [Nightbot](#nightbot)
    + [StreamElements](#streamelements)
  * [Tricks Elite Circuit](#tricks-elite-circuit)
    + [Fossabot](#fossabot-1)
    + [Nightbot](#nightbot-1)
    + [StreamElements](#streamelements-1)
  * [Tricks Pro Circuit](#tricks-pro-circuit)
    + [Fossabot](#fossabot-2)
    + [Nightbot](#nightbot-2)
    + [StreamElements](#streamelements-2)
- [API Reference](#api-reference)
  * [Rank](#rank)
  * [Teams](#teams)
  * [Record This Stream](#record-this-stream)
- [Nightbot Exec-Only Commands](#nightbot-exec-only-commands)
- [ID Reference](#id-reference)

# Required Info

For these commands, you'll need your streamer's discord ID, which requires your discord having dev options enabled. Open your user settings, click Advanced on the left, and toggle developer mode on. Then right click on your streamer on discord and click "Copy User ID". This is what you'll use to replace `DISCORD_ID` in the commands below. Note that this is **NOT** their @, it is a string of numbers like 695720531856719872.

# Command Snippet Quick Reference

## Pro City

### Fossabot

**Rank**  
```!addcom !pcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1061301529597976700&queue_id=1404512069318873261)```

**Teams**  
```!addcom !pcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1061301529597976700)```

**Record This Stream**  
```!addcom !pcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1061301529597976700&uptime=$(uptime))```

### Nightbot

**Rank**  
```!addcom !pcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1061301529597976700&queue_id=1404512069318873261)```

**Teams**  
```!addcom !pcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1061301529597976700)```

**Record This Stream**  
```!addcom !pcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1061301529597976700&uptime=$(twitch $(channel) "{{uptimeLength}}"))```

### StreamElements

**Rank**  
```!cmd add !pcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1061301529597976700&queue_id=1404512069318873261)```

**Teams**  
```!cmd add !pcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1061301529597976700)```

**Record This Stream**  
```!cmd add !pcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1061301529597976700&uptime=$(uptime))```

## Tricks Elite Circuit

The elite circuit queue is the one used by tier 1 and top tier 2 pros.

### Fossabot

**Rank**  
```!addcom !tecrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1285984148195905576&server_name=tricks%20elite%20circuit)```

**Teams**  
```!addcom !tecteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

**Record This Stream**  
```!addcom !tecrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1264960696076992634&uptime=$(uptime)&server_name=tricks%20elite%20circuit)```

### Nightbot

**Rank**  
```!addcom !tecrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1285984148195905576&server_name=tricks%20elite%20circuit)```

**Teams**  
```!addcom !tecteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

**Record This Stream**  
```!addcom !tecrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1061301529597976700&uptime=$(twitch $(channel) "{{uptimeLength}}")&server_name=tricks%20elite%20circuit)```

### StreamElements

**Rank**  
```!cmd add !tecrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1285984148195905576&server_name=tricks%20elite%20circuit)```

**Teams**  
```!cmd add !tecteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

**Record This Stream**  
```!cmd add !tecrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1264960696076992634&uptime=$(uptime)&server_name=tricks%20elite%20circuit)```


## Tricks Pro Circuit

The pro circuit queue is the one used by tier 2 pros still refining their craft.

### Fossabot

**Rank**  
```!addcom !tpcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1413495681624178890&server_name=tricks%20pro%20circuit)```

**Teams**  
```!addcom !tpcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

**Record This Stream**  
```!addcom !tpcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1264960696076992634&uptime=$(uptime)&server_name=tricks%20pro%20circuit)```

### Nightbot

**Rank**  
```!addcom !tpcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1413495681624178890&server_name=tricks%20pro%20circuit)```

**Teams**  
```!addcom !tpcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

**Record This Stream**  
```!addcom !tpcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1061301529597976700&uptime=$(twitch $(channel) "{{uptimeLength}}")&server_name=tricks%20pro%20circuit)```

### StreamElements

**Rank**  
```!cmd add !tpcrank $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1?user_id=DISCORD_ID&server_id=1264960696076992634&queue_id=1413495681624178890&server_name=tricks%20pro%20circuit)```

**Teams**  
```!cmd add !tpcteams $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1?user_id=DISCORD_ID&server_id=1264960696076992634)```

**Record This Stream**  
```!cmd add !tpcrecord $(touser) $(urlfetch https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1?user_id=DISCORD_ID&server_id=1264960696076992634&uptime=$(uptime)&server_name=tricks%20pro%20circuit)```

# API Reference

## Rank

Displays the user's MMR, leaderboard position, and wins and losses for the current leaderboard slice, or for all time if there is no current slice.

The endpoint is available at https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrank/v1 and takes the following query string parameters:  
`user_id`: _(Required)_ The ID of the discord user  
`server_id`: _(Required)_ The ID of the discord guild that contains the queue  
`queue_id`: _(Required)_ The ID of the discord channel used for the queue within the server  
`server_name`: The name of the server, eg "pro city" or "tricks elite circuit" (defaults to "pro city")

The return text is formatted as follows:

```
user's pro city MMR is xRR (Rank #x on the leaderboard with x wins and x losses for slice)
```

If the user is not yet on the leaderboard (i.e. hasn't completed the required # of matches) then the endpoint will return player not found.

## Teams

Displays the two teams in the format `Team A: ... | Team B ...`.

The endpoint is available at https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcteams/v1 and takes the following query string parameters:  
`user_id`: _(Required)_ The ID of the discord user  
`server_id`: _(Required)_ The ID of the discord guild that contains the queue

## Record This Stream

Shows the games won and lost since stream started. Also shows the win/loss result for last map.

The endpoint is available at https://xaj8txb22l.execute-api.us-east-2.amazonaws.com/prod/pcrecord/v1 and takes the following query string parameters:  
`user_id`: _(Required)_ The ID of the discord user  
`server_id`: _(Required)_ The ID of the discord guild that contains the queue  
`uptime`: _(Required)_ The uptime string for the channel  
`server_name`: The name of the server, eg "pro city" or "tricks elite circuit" (defaults to "pro city")

The output format is the following:
```
user's record for pro city this stream is xW-xL | Last map (Haven): Loss
```


# Nightbot Exec-Only Commands

These commands are only needed if you find the `urlfetch`-based commands above too slow. Since this is for advanced use only, you'll have to replace the server id and queue id yourself. See [ID Reference](#id-reference) below.

**Rank**  
```$(eval var d=$(urlfetch json https://host.neatqueue.com/api/leaderboard/SERVER_ID/QUEUE_ID);var id='DISCORD_ID';let k=Object.keys(d).sort().slice(-2,-1)[0];var p=d[k].find(plyr=>plyr.id===id);if(p){let r=p.data.current_rank;`${p.name}'s pro city rank is ${Math.round(p.data.mmr)}RR (Rank ${r?'#'+r:'<none yet>'} on LB with ${p.data.wins} wins and ${p.data.losses} losses for ${k})`}else{'Player not found'})```

**Teams**  
```$(eval var d=$(urlfetch json https://host.neatqueue.com/api/matches/SERVER_ID/);var id='DISCORD_ID';var m=Object.values(d).find(match=>match.players.some(p=>p.id===id));m?'Team A: '+m.teams[0].map(p=>p.name).join(', ')+' | Team B: '+m.teams[1].map(p=>p.name).join(', '):'Player not found in an active match.')```

**Record This Stream**  
Note that there are two `DISCORD_ID` replacements here.
```$(eval let r=[0,0]; var d=$(urlfetch json https://api.neatqueue.com/api/history/SERVER_ID?player_id=DISCORD_ID);d.data.filter(m=>new Date(`${m.time}Z`)>new Date('$(twitch $(channel) "{{uptimeAt}}")')).filter(m=>m.winner!==null&&m.winner>-1).forEach(m=>{const t=m.teams.findIndex(ps=>ps.some(p=>p.id==='DISCORD_ID'));const w = m.winner;r[t^w]++}); `record this stream: ${r[0]}W-${r[1]}L`)```

# ID Reference

Here's a reference of the server id and queue id for the queues I know about:

| Queue                | SERVER_ID           | QUEUE_ID            |
|----------------------|---------------------|---------------------|
| Pro City             | 1061301529597976700 | 1404512069318873261 |
| Tricks Elite Circuit | 1264960696076992634 | 1285984148195905576 |
| Tricks Pro Circuit   | 1264960696076992634 | 1413495681624178890 |