module.exports = callback => {
  const ether = n => new web3.BigNumber(web3.toWei(n, 'ether'));
  const TrustfeedToken = artifacts.require('TrustfeedToken');
  const TrustfeedCrowdsale = artifacts.require('TrustfeedCrowdsale');

  const runCrowdsale = token => TrustfeedCrowdsale.deployed()
    .then(crowdsale => {
      token.transferOwnership(crowdsale.address);
      const investor = '0x13De3ea2593cE9Fb3267020773bF584561245258';
      crowdsale.buyTokens(investor, { from: investor, value: ether(15) });
    })
    .catch(error => console.error(error));

  TrustfeedToken.deployed()
    .then(runCrowdsale)
    .catch(error => console.error(error));
};
