const bitcoin = require("bitcoinjs-lib");
//function rng () { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }
//const keyPair = bitcoin.ECPair.makeRandom({ rng: rng })


const regtest = bitcoin.networks.testnet
const bip65 = require('bip65')

const keyPair = bitcoin.ECPair.makeRandom()

const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
console.log(keyPair);
console.log(address);