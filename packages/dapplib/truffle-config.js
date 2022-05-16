require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth praise pull install fork slot gentle'; 
let testAccounts = [
"0x8e2a2eef3158280a168eb0ab8fbafb710a7086223a64920f7d201e244a5cdb04",
"0x6f2f51f6ee0f62ef66e4661e550d09f314f01d980a3dea2ba7a1ef46bed58e93",
"0x1e17b0e044c55696a63e7a05d7d5fa0d268ca0e2adaa61cb9c38dd6cc8ded088",
"0xb53d831cc65d8a18951c209f8c4a8fb4978fd861efd6eeef5e15d9d1ed00a2c2",
"0x1f9f9ac3f917ec1b67457d778939dc8bc13370b5de52871c4a0122a116e27283",
"0x9deaa71c6e4319e8c674618f7b79d772a62bd7998eefc872598b806b7639ac63",
"0xbcfd717b32dd17c039508914a1c2f6ec195545c0f4ab3618b93371b015a443a7",
"0x1fadd2a53b6a2338be70bdba6a1ab5ef39673d70fedc916d5eec474178d5b3d9",
"0x5d1ff8dfe61105ae9c1c75510bfba1a52335e6c5bce08707bcd665a63f7a5ec4",
"0x96520022dfbba3b441e5e57112b6b953c8886809f5322d8436beb41d5668d4d7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


