# Music-bot

A complete code to download for a music bot 🎧

Looking for a code for a music bot ? This fully open source code is made for your project !

### ⚡ Configuration

Open the configuration file located in the main folder `config.js`.

```js
module.exports = {
    app: {
        token: 'X',
        playing: 'made by mich',
        global: true,
        guild: 'X'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'XXX',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: true,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {}
    }
};
```

Basic configuration

- `app/token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section
- `app/playing`, the activity of the bot
- `app/global`, whether the commands will work on all servers or just one (if global they might take up to an hour to show up)
- `app/guild`, the guild the slash command will be loaded to (this only applys if global is set to false)

DJ mode configuration

- `opt/DJ/enabled`, whether the DJ mode should be activated or not 
- `opt/DJ/roleName`, the name of the DJ role to be used
- `opt/DJ/commands`, the list of commands limited to members with the DJ role

Advanced configuration

- `opt/maxVol`, the maximum volume that users can define
- `opt/leaveOnEnd`,  if the bot will leave on finishing the queue
- `opt/loopMessage`, if the message that a music is played should be sent when it is looped
- `opt/spotifyBridge`, takes spotify songs/playlists and searches it on youtube and plays it (highly recommended)
- `opt/defaultvolume`, is the defaul volume the queue will start at
- `opt/discordPlayer`, options used by discord-player

### 📑 Installation

To use the project correctly you will need some tools.

[FFmpeg](https://www.ffmpeg.org) to process audio

[Node JS](https://nodejs.org/en/) (v16.6) for environment

### 📝 ToDo 

- [ ] lyrics command

-  [ ] vote to skip command

- [ ] history commnad

- [ ] auto autocomplete (play, search, filters, ect)

- [ ] better button option's

- [ ] more config's for discord player 
