const dashTelegramBot = require("./dashaTelegramBot");
const testingVK2022Bot = require("./Vitali/testingVK2022Bot");
const initApp = () => {
  testingVK2022Bot();
  dashTelegramBot();
};

module.exports = initApp;
