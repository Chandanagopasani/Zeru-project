const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC_URL)); // Add RPC_URL in .env if needed

module.exports = web3;
