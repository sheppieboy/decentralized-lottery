const { network, ethers, deployments, getNamedAccounts } = require('hardhat');
const {
  developmentChains,
  networkConfig,
} = require('../../helper-hardhat-config');
const { assert } = require('chai');
const { describe } = require('mocha');

!developmentChains.includes(network.name)
  ? describe.skip
  : describe('Lottery Unit Tests', async () => {
      let lottery, vrfCoordinatorV2Mock;
      const chainId = network.config.chainId;

      beforeEach(async () => {
        const { deployer } = getNamedAccounts();
        console.log(deployer);

        await deployments.fixture(['all']);

        lottery = await ethers.getContract('Lottery', deployer);
        vrfCoordinatorV2Mock = await ethers.getContract(
          'VRFCoordinatorV2Mock',
          deployer
        );
      });

      describe('constructor', async () => {
        it('initialized constructor correctly', async () => {
          console.log('ahskakjsd');
        });
      });
    });
