const { network } = require('hardhat');
const { developmentChains } = require('../helper-hardhat-config');

const BASE_FEE = ethers.utils.parseEther('0.25'); //0.25 is the premium. It costs 0.24 LINK
const GAS_PRICE_LINK = 1e9; //calculated value based on the gas price of the chain

module.exports = async ({ getNameAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNameAccounts();

  if (developmentChains.includes(network.name)) {
    log('Local network detected....deploying mock!');
    await deploy('VRFCoordinatorV2Mock', {
      from: deployer,
      log: true,
      args: [BASE_FEE, GAS_PRICE_LINK],
    });

    log('Mocks deployed');
    log('=================================================================');
  }
};

module.exports.tags = ['all', 'mocks'];
