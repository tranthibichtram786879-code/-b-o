const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log('Bot đã online!');
});

// list câu trả lời kiểu cọc
const replies = [
  "Nói chuyện ngu vậy? 😡",
  "Nghe mà muốn block luôn á 🙂",
  "Im đi cho đời bình yên 😏",
  "Nói nữa ăn mute giờ 😒",
  "Ủa rồi nói vậy luôn á hả? 🤨",
  "Não để trưng à? 😑",
  "Nói chuyện mà không suy nghĩ luôn 🤡",
  "Chán luôn đó 🙂"
];

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  // bot phản ứng khi bị chửi
  if (msg.includes('ngu') || msg.includes('đần') || msg.includes('idiot')) {
    const random = replies[Math.floor(Math.random() * replies.length)];
    message.reply(random);
  }

  // chào
  if (msg.includes('chào')) {
    message.reply('Chào cái gì 😏');
  }

  // gọi bot
  if (msg.includes('bot')) {
    message.reply('Gọi gì? Nói nhanh 😒');
  }

  // random nói chuyện (giống AI)
  if (Math.random() < 0.2) {
    const random = replies[Math.floor(Math.random() * replies.length)];
    message.reply(random);
  }
});

client.login(process.env.TOKEN);
