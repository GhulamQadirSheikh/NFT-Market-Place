require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/gUmPLkyaB0HkHKpi3u_BznS3M4GljMJL",
      accounts: [`0x${"991547baac72d1c8782700da28f8dc2e988dc80b33837a7b0687bb38eb6cad78"}`],
    },
  },
};