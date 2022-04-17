'use strict';

const { Contract } = require('fabric-contract-api');

class Application extends Contract {

    // creates the initial ledger
    async initLedger(ctx) {
        const houses = [
            {
                price: 1000000,
                location: '2155 Lawrence Avenue East',
                type: 'House',
                owner: 'Alton',
            },
            {
                price: 500000,
                location: '2100 Lawrence Avenue East',
                type: 'Condo',
                owner: 'Aayush',
            },
            {
                price: 1500000,
                location: '34 Kennedy Road',
                type: 'House',
                owner: 'Cindy',
            }
        ];

        for (let i = 0; i < houses.length; i++) {
            houses[i].docType = 'house';
            await ctx.stub.putState('HOUSE' + i, Buffer.from(JSON.stringify(houses[i])));
            console.info('Added <--> ', houses[i]);
        }
    }

    // adds a house to the ledger
    async createHouse(ctx, houseID, price, location, type, owner) {

        const house = {
            price,
            docType: 'house',
            location,
            type,
            owner,
        };

        await ctx.stub.putState(houseID, Buffer.from(JSON.stringify(house)));
    }

    // returns the ledger in JSON format
    async queryAllHouses(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        return JSON.stringify(allResults);
    }

    // changes the specified value in the leedger
    async changeHouseValues(ctx, houseID, price, location, type, owner) {

        const houseAsBytes = await ctx.stub.getState(houseID);
        if (!houseAsBytes || houseAsBytes.length === 0) {
            throw new Error(`${houseID} does not exist`);
        }
        const house = JSON.parse(houseAsBytes.toString());
        house.price = (price !== '') ? price : house.price;
        house.location = (location !== '') ? location : house.location;
        house.type = (type !== '') ? type : house.type;
        house.owner = (owner !== '') ? owner : house.owner;

        await ctx.stub.putState(houseID, Buffer.from(JSON.stringify(house)));
    }

}

module.exports = Application;
