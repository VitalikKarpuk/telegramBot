const TelegramBot = require("node-telegram-bot-api");
// const debug = require("./helpers");
// const fs = require("fs");
const TOKEN = "5553791482:AAEZ367kZW9al_Ro6yTnsCOjlRDwl6jSmaM";
const bot = new TelegramBot(TOKEN, {
  polling: true,
});


const inline_keyboard = [
  [
    {
      text: "Forward",
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
      text: "Delete",
      callback_data: "delete",
    },
  ],
];

bot.onText(/\/start/, (msg, [source, match]) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Keyboard", {
    reply_markup: {
      inline_keyboard,
    },
  });
});