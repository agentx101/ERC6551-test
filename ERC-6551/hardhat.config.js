const{mnemonic, alchemyKey,opgoerliKey}=require('./secrets.json');
// const tbaAbi= require('./abi/tbaAbi.json');

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-deploy');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.13',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "op-goerli",
  networks: {
    'op-goerli': {
      url:'https://goerli.optimism.io',
      accounts: {
        mnemonic,
      
      },
      gasPrice: 1000000,
    }
  },
  namedAccounts: {
    deployer: 0
  },
  etherscan: {  // copy the Etherscan object from the verify Contracts secion on Dashboard 
    apiKey: {
      opgoerli: "verifyContract",
    },
    customChains: [
      {
        network: "op-goerli",
        chainId: 420,
        urls: {
          apiURL: 'https://api-goerli-optimism.etherscan.io/api?module=contract&action=checkproxyverification&guid=gwgrrnfy56zf6vc1fljuejwg6pelnc5yns6fg6y2i6zfpgzquz&apikey='+opgoerliKey,
          browserURL: "https://goerli-optimism.etherscan.io/",
        },
      },
    ],
  },
};
