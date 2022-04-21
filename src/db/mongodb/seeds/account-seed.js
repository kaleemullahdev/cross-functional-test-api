const mongoose = require('mongoose');
const { fakeAccount } = require('../../../models/account');
const account = require('../models/account');

// Seeder using async await
const seedDatabase = async () => {
	const accounts = [];

	for (let i = 0; i < 5; i += 1) {
		const data = {
			...fakeAccount(),
		};
		accounts.push(data);
	}

	await account.create(accounts);
};

// Drop DB then seed

mongoose.connection.dropCollection('accounts', async () => {
	await seedDatabase();
	mongoose.connection.close();
});
