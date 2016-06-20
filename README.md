# A template for creating Discord bot commander quickly

# Core Library
* [Discord.js](https://github.com/hydrabolt/discord.js)

# Installation

## Create Discord bot
1. [create Discord bot](https://discordapp.com/developers/applications/me/create) and get the token of your bot.
2. get your token.

## Add your bot to server (change CLIENT_ID to yours)
1. <https://discordapp.com/oauth2/authorize?client_id={CLIENT_ID}&scope=bot&permissions=66186303>

## Setup bot
1. `npm install`
2. Override your token <https://github.com/blackbing/discord-bot-commander/blob/master/config.json>
3. `npm start`

# Add Your command
1. Edit command and callbacks [commands.js](https://github.com/blackbing/discord-bot-commander/blob/master/commands.js)

# Demo
![Alt text](https://i.imgur.com/ntTnPMl.png)
