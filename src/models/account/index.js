const buildMakeAccount = require('./build-make-account');
const accountSchema = require('./account-schema');
const accountValidator = require('../validator')(accountSchema);
const fakeAccount = require('./fake-account');

const makeAccount = buildMakeAccount(accountValidator);
module.exports = { makeAccount, fakeAccount };
