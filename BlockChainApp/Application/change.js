'use strict';

const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');

async function main(username, id, price, location, type, owner) {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get(username);
        if (!identity) {
            console.log(`An identity for the user ${username} does not exist in the wallet`);
            console.log('Run the registerUser.js application before retrying');
            return `An identity for the user ${username} does not exist in the wallet. Please register beforehand.`;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: username, discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('Application');

        await contract.submitTransaction('changeHouseValues', id, price, location, type, owner);
        console.log('Transaction has been submitted');

        // Disconnect from the gateway.
        await gateway.disconnect();
        return `House ${id} has been changed`

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        return `Failed to submit transaction: ${error}`
    }
}

module.exports = {
    change: main
}
