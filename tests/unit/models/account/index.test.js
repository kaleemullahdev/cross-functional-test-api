const { fakeAccount, makeAccount } = require('../../../../src/models/account');

describe('checking whether account is created', () => {
	test('must have all expected properties of the account', () => {
		const acc = fakeAccount();
		const dummyAccount = {
			...acc,
			firstName: acc.name.first,
			lastName: acc.name.last,
			phoneNumber: acc.phone.primary,
			password: acc.password,
		};
		delete dummyAccount.name;
		delete dummyAccount.phone;

		const account = makeAccount(dummyAccount);

		expect(account.info.getName()).toHaveProperty('first');
		expect(account.info.getName()).toHaveProperty('last');
		expect(account.info.getPhone()).toHaveProperty('primary');
		expect(account.info.getName().first).toBe(dummyAccount.firstName);
		expect(account.info.getName().last).toBe(dummyAccount.lastName);
		expect(account.info.getPhone().primary).toBe(dummyAccount.phoneNumber);
		expect(account.info.getEmail()).toBe(dummyAccount.email);
	});
});
