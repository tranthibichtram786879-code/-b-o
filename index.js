const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log('Bot đã online!');
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('ngu')) {
    message.reply('Nói chuyện ngu vậy? 😡');
  }

  if (message.content.toLowerCase().includes('chào')) {
    message.reply('Chào cái gì 😏');
  }
});

client.login(process.env.TOKEN);
