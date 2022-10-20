const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/ef97dc768c5f40b093fa92a97a42d46f`),
        network_id: 5,       // goerli's id
        gas: 30000000,
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
};