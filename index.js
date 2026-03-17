const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log('Bot đã online, nói chuyện cho đàng hoàng 😏');
});

// câu trả lời theo mood
const chill = [
  "Ừ nói tiếp đi 🙂",
  "Nghe cũng tạm 😏",
  "Rồi sao nữa 🤨",
  "Nói chuyện có não chút đi 😌"
];

const toxic = [
  "Nói ngu vậy ai nghe 😡",
  "Im đi cho đỡ mệt 😒",
  "Tới đây thôi, nói nữa block giờ 🙂",
  "Đừng làm tao mất kiên nhẫn 😤"
];

const smart = [
  "Ừ cái này đúng nè 👍",
  "Hiểu rồi, nói tiếp đi 😏",
  "Cũng có lý đó 🤔"
];

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  // chửi → chửi lại
  if (msg.includes('ngu') || msg.includes('đần') || msg.includes('óc')) {
    return message.reply(toxic[Math.floor(Math.random() * toxic.length)]);
  }

  // hỏi → trả lời kiểu AI
  if (msg.includes('?')) {
    return message.reply(smart[Math.floor(Math.random() * smart.length)]);
  }

  // gọi bot
  if (msg.includes('bot')) {
    return message.reply("Gọi gì? Nói lẹ 😒");
  }

  // random nói chuyện
  if (Math.random() < 0.25) {
    return message.reply(chill[Math.floor(Math.random() * chill.length)]);
  }
});

client.login(process.env.TOKEN);
