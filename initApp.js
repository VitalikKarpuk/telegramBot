const dashTelegramBot = require("./dashaTelegramBot");
const testingVK2022Bot = require("./Vitali/testingVK2022Bot");
const initApp = () => {
  dashTelegramBot();
  testingVK2022Bot();
};

module.exports = initApp;
