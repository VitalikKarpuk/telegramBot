const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "6029701770:AAGHemy4Ewpltsyhqk-Xue7zx6uG_mtGPNY";
const bot = new TelegramBot(TOKEN, {
  polling: true,
});

const inline_keyboard = [
  [
    {
      text: "111111",
      callback_data: "forward",
    },
    {
      text: "Reply",
      callback_data: "reply",
    },
  ],
  [
    {
      text: "Edit",
      callback_data: "edit",
    },
    {
      text: "Delejhgjbjbte",
      callback_data: "delete",
    },
  ],
];

bot.onText(/\/start/, (msg, [source, match]) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "5555555555", {
    reply_markup: {
      inline_keyboard,
    },
  });
});