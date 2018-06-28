const TrustfeedCrowdsale = artifacts.require('./TrustfeedCrowdsale.sol');
const TrustfeedToken = artifacts.require('./TrustfeedToken.sol');

const { duration } = require('../helpers/increaseTime');
const ether = n => new web3.BigNumber(web3.toWei(n, 'ether'));

this.openingTime = web3.eth.getBlock('latest').timestamp + duration.seconds(1);
this.closingTime = this.openingTime + duration.weeks(1);
const BigNumber = web3.BigNumber;

const RATE = new BigNumber(10);
const GOAL = ether(10);
const CAP = ether(20);
const OWNER = '0xc4B4bED8753F32eC1327570a58e47Bad312298Bd';
const WALLET = '0xcD9573563af5eCb2aC50402BCcd2F64d3cBdD0Eb';

module.exports = function (deployer) {
  return deployer
    .then(() => {
      return deployer.deploy(
        TrustfeedToken,
        OWNER,
      );
    })
    .then(() => {
      return deployer.deploy(
        TrustfeedCrowdsale,
        this.openingTime,
        this.closingTime,
        RATE,
        WALLET,
        CAP,
        TrustfeedToken.address,
        GOAL,
      );
    });
};
