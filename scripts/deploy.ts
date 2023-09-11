import { ethers } from "hardhat";

async function main() {
  const MitAvatar = await ethers.deployContract("MITNft", []);
  await MitAvatar.waitForDeployment();
  console.log(`Mitong's Avatar is deployed to ${MitAvatar.target}`);

  console.log(await MitAvatar.tokenURI(1));
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
