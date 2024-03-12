var http = require('http');
const Discord = require('discord.js');

const discordClient = new Discord.Client();

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
  // Set Discord RPC here
  discordClient.user.setActivity('your game', { type: 'PLAYING' });
});

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

discordClient.login('1061631751685931079');
