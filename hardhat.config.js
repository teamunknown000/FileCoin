require("@nomicfoundation/hardhat-toolbox");
const { config } = require("dotenv");
config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    testnet: {
      url: "https://rpc.ankr.com/filecoin_testnet",
      accounts: [process.env.FILE_COIN_ACCOUNT],
    },
  },
  paths: {
    root: "./src",
  },
};
