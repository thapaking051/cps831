# CPS831 Blockchain Project

To install the project follow the following steps

### Prerequisites

Insure that you have all the prerequisites found at https://hyperledger-fabric.readthedocs.io/en/release-2.2/prereqs.html

### Clone the repo

Clone the repo using `git clone`

Once cloned `cd` into the `cps831` directory

### Installing binaries and docker images

Install the neccessary binaries and docker images by running the following link

`curl -sSL https://bit.ly/2ysbOFE | bash -s -- -s`

This will install the Hyperledger Fabric platform-specific binaries and config files for the version specified into the /bin and /config directories of fabric-samples and download the Hyperledger Fabric docker images

### Start the blockchain network

\*`cd BlockChainApp` and `./startFabric.sh` will start up the blockchain network including creating orgs and peer nodes, creating channels and deploying our chaincode onto the channel

### Start web app's back-end

Once the network is up and running we must start the accompanying web app. Run `cd Application` to go to the web app's directory then run `npm install` to download the required packages. Finally, doing `node express.js` will start up the back-end.

### Start web app's front-end

Once the back-end is up we must start up the front-end. Run `cd blockchain-front-end` to go to the web app's front-end directory then run `npm install` to download the required packages. Finally, doing `npm run serve` will start up the front-end. The site can be found at `http://localhost:8080/`


*NOTE: sometimes there are permission issues when starting the blockchain network. If these issues arise simply `cd` out of the `cps831` directory then run `chmod -R 755 cps831/`. This will give all the files the neccassary permissions needed to run as expected.
