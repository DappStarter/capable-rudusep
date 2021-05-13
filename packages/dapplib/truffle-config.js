require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note six prosper install open foster gentle'; 
let testAccounts = [
"0x77f9936523e910ee124ee824b1ab83fd90d1071db1ddcf136584b2072da969d6",
"0x46b7d4895d487c9c71850275eef0b073d54bb411ea13fc81b94080564bf59ed2",
"0xbd89b0858fe3b1b550aea1c6d61ba9fa2340d5d8f87234da7d5f2e0b33054f31",
"0xbefb4907aada4813a59f38c36de1de62553933da83ead831e0f8d7bd2890c9c4",
"0x40d6a8ad0d64b51c0fb71c8643b54fdb89ca87aef1fc0521f2f6886c9d58585c",
"0xc2c1da259839d440f9630afd2dce0c59cacd969339541a99d3f8813a2bdc3d84",
"0x2cbdb3b4092c916c25a26d6abf3ecaca0c09d0aa7dc63de66aea464e624705af",
"0x918ece77078e3bfc56bc7dba3defceca2141a61f95d226811d2364f62d8e2ee7",
"0xfedb6b96dd085b0906c219bacbe9c76469fca9b568cb0347466f3855fe28bca3",
"0xb01bef6419294ffa5c8833948f29523e794edc85849591824e2a0dcb8ef1a125"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
