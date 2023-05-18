const { network } = require('hardhat');
const { developmentChains } = require('../helper-hardhat-config');

module.exports = async ({ getNameAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNameAccounts();
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    log('Local network detected....deploying!');
  }
};
