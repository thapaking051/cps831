/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const Application = require('./lib/chaincode');

module.exports.Application = Application;
module.exports.contracts = [ Application ];
