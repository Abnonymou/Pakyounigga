const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "Kyle Pogi",
    role: 0,
    cooldown: 5,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin."
    },
    category: "utility",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message, prefix }) {
    const botPrefix = prefix; // Use the provided bot prefix
    const authorName1 = "Kyle Bait-it",
    const authorName2 = "vincent armenion", 
    const authorName3 = "John Dereck Midrano Oboza", 
    const authorName4 = "Joshua Bartolome", 
      
    const authorFB1 = "https://www.facebook.com/itssmekylebaitit";
    const authorFB2 = "https://www.facebook.com/profile.php?id=100090775159086";
    const authorFB3 = "https://www.facebook.com/Johndereckmedranooboza";
    const authorFB4 = "https://www.facebook.com/joshua.bartolome.1614460";

    
    const now = moment();
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    const additionalText = "𝗲𝗱𝗶𝘁 𝗯𝘆 𝐾𝑦𝑙𝑒 𝐵𝑎𝑖𝑡-𝑖𝑡㋡";

    // Combine the bot information and additional text in a single message
    message.reply(`======[ℹ𝗕𝗼𝘁 𝗶𝗻𝗳𝗼:]======
     🤖 𝗕𝗼𝘁 𝗽𝗿𝗲𝗳𝗶𝘅: ${botPrefix}
======================
🤖 𝗕𝗼𝘁 𝗻𝗮𝗺𝗲 : 𝗔𝗥𝗧𝗜𝗙𝗜𝗖𝗜𝗔𝗟 𝗜𝗡𝗧𝗘𝗟𝗟𝗜𝗚𝗘𝗡𝗖𝗘 𝗕𝗢𝗧
 Bot author1 : ${authorName1}
 Bot author2 : ${authorName2}
 Bot author3 : ${authorName3}
 Bot author4 : ${authorName4}
======================
𝗛𝗔𝗡𝗗𝗦𝗢𝗠𝗘'𝗦 𝗔𝗗𝗠𝗜𝗡'𝗦👇
👑𝗔𝗱𝗺𝗶𝗻𝟭: ${authorName1}
👤𝗔𝗱𝗺𝗶𝗻𝟮: ${authorName2}
👤𝗔𝗱𝗺𝗶𝗻𝟯: ${authorName3}
👤𝗔𝗱𝗺𝗶𝗻𝟰: ${authorName4}
======================
🔗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: [{authorName1}] 💬${authorFB1}💬
🔗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: [{authorName2}] 💬${authorFB2}💬
🔗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: [{authorName3}] 💬${authorFB3}💬
🔗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: [{authorName4}] 💬${authorFB4}💬
======================
📅 𝗗𝗮𝘁𝗲: ${date}
======================
🕒 𝗧𝗶𝗺𝗲: ${time}
======================
⏰ 𝗨𝗽𝘁𝗶𝗺𝗲: ${uptimeString}
======================
      
      ${additionalText}
    `);
  },

  onChat: async function ({ event, message, getLang, prefix }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.onStart({ message, prefix });
    }
  }
};
