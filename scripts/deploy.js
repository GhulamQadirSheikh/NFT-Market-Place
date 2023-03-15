const hre = require("hardhat");

async function main() {
  const NFTMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
  const nftMarketplace = await NFTMarketPlace.deploy();

  await nftMarketplace.deployed();

  console.log(
    `deployed contract address ${nftMarketplace.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
