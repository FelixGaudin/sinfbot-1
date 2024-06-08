# SinfBot

This repository contains the source code of SinfBot, the Discord bot of the "Sciences informatique" server (which you can join by clicking [here](https://discord.gg/GGqdFYgCn8))

## Setup

> [!IMPORTANT]
> SinfBot uses [Bun](https://bun.sh/) as the runtime (because why not?). Everything should be working with the standard Node.js installation, but you'll have to adapt some scripts in `package.json` (and possibly other stuff related to Typescript, so please use Bun it's easier).

To install the required dependencies, run the following command:

```sh
bun install
```

Rename the `.env.example` file to `.env` and modify the variables appropriately. Discord token and application ID can be obtained from [here](https://discord.com/developers/applications). Guild ID refers to your server ID (which can be copied from the Discord client by right clicking on the server's name)

To run the bot, execute the following:

```sh
bun start
```