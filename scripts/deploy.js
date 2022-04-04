const hre = require("hardhat");
const path = require("path");

async function main() {
  const path = require("path");
  const envConfig = require('dotenv').config({path: path.resolve(__dirname, '.env')});
  const {
    MAIN_ADDR_1,
    MAIN_ADDR_2
  } = envConfig.parsed || {};

  const NftToken = await hre.ethers.getContractFactory("contracts/Staking.sol:Staking");

  const NftTokenDeploy = await NftToken.deploy(
      "NFT Royalty",
      "Royal",
      "ipfs://some_link_here/",
      10,
      [MAIN_ADDR_1, MAIN_ADDR_2]
  );

  await NftTokenDeploy.deployed();

  console.log("NftTokenDeploy deployed to:", NftTokenDeploy.address);

  await new Promise(r => setTimeout(r, 10000));

  await hre.run("verify:verify", {
    address: NftTokenDeploy.address,
    constructorArguments: [
      "NFT Royalty",
      "Royal",
      "ipfs://some_link_here/",
      10,
      [MAIN_ADDR_1, MAIN_ADDR_2]
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
