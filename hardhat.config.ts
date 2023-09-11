import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIARPC,
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "WnYSbY37gwkjXxz36dPsPbypx4Damx7s",
    }
  }
};

export default config;
