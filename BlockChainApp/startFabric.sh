#!/bin/bash
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
# Exit on first error
set -e

# don't rewrite paths for Windows Git Bash users
export MSYS_NO_PATHCONV=1
starttime=$(date +%s)
CC_SRC_LANGUAGE=${1:-"javascript"}
CC_SRC_LANGUAGE=`echo "$CC_SRC_LANGUAGE" | tr [:upper:] [:lower:]`

if [ "$CC_SRC_LANGUAGE" = "javascript" ]; then
	CC_SRC_PATH="../chaincode/Application"
else
	echo The chaincode language ${CC_SRC_LANGUAGE} is not supported by this script
	exit 1
fi

# clean out any old identites in the wallets
rm -rf Application/wallet/*

# launch network; create channel and join peer to channel
pushd ../test-network
./network.sh down
./network.sh up createChannel -ca -s couchdb
cd addOrg3
./addOrg3.sh up -ca -s couchdb
cd ..
./network.sh deployCC -ccn Application -ccv 1 -cci initLedger -ccl ${CC_SRC_LANGUAGE} -ccp ${CC_SRC_PATH}
popd

cat <<EOF

Total setup execution time : $(($(date +%s) - starttime)) secs ...

Next, use our application to interact with the deployed contract.
Our application is available with an accompanying web app that provies a UI for the user.
Follow the instructions for the programming language of your choice:

Start by changing into the "Application" directory:
  cd Application

Next, install all required packages:
  npm install

Then run the following applications to enroll the admin user which will be used by 
the other applications to interact with the deployed contract:
  node enrollAdmin

You can then start up the backend of our web app:
  node express

To start the front-end start by changing to the "blockchain-front-end" directory:
  cd blockchain-front-end

Once again, install all required packages:
  npm install

Start up the front-end:
  npm run serve

You can find the accompanying web-app at this address:
  http://localhost:8080/

EOF
