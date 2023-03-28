const TelegramBot = require("node-telegram-bot-api");
const debug = require("./helpers");
const fs = require("fs");
const TOKEN = "5553791482:AAEZ367kZW9al_Ro6yTnsCOjlRDwl6jSmaM";
const bot = new TelegramBot(TOKEN, {
  polling: true,
});

bot.onText(/\/pic2/, (msg) => {
  bot.sendPhoto(msg.chat.id, "/cat.png", {
    caption: "1111",
  });
});
