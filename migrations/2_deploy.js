const Box = artifacts.require("NFTNumber");

module.exports = async function (deployer) {
  await deployer.deploy(Box);
};
