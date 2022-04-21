const faker = require('faker');

const fakeAccount = () => {
	const account = {
		name: {
			first: faker.name.firstName(),
			last: faker.name.lastName(),
		},
		phone: {
			primary: faker.phone.phoneNumber('(###) ###-####'),
		},
		password: 'Password123',
	};

	account.email = faker.internet.email(account.firstName, account.lastName);

	return account;
};

module.exports = fakeAccount;
