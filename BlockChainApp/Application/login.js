'use strict';

const { Wallets } = require('fabric-network');
const path = require('path');
let response = {}

async function main(username) {
    try {
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        const identity = await wallet.get(username);
        if (!identity) {
            console.log(`An identity for the user ${username} does not exist in the wallet`);
            console.log('Run the registerUser.js application before retrying');
            response.loggedin = false
            response.message = `An identity for the user ${username} does not exist in the wallet. Please register beforehand.`
        }
        else{
            response.loggedin = true
            response.message = `Logged in as ${username}`
        }
        return response

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        response.loggedin = false
        response.message = `Failed to submit transaction: ${error}`
        return response
    }
}

module.exports = {
    login: main
}
