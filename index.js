const Eris = require("eris");
const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);
const discordClient = new Discord.Client();

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord

// Discord.js ready event
discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
  // Set Discord RPC here
  discordClient.user.setActivity('your game', { type: 'PLAYING' });
});

// Replace 'your game' with the activity you want to display

// Login to Discord.js client
discordClient.login('1061631751685931079');
