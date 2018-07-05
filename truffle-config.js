require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*', // Match any network id
    },
    rinkeby: {
      host: 'localhost',
      port: 8545,
      network_id: 4, // 4 - rinkeby
      gas: 4700000
    }
  }
};
