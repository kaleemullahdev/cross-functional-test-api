const faker = require('faker');
const serialize = require('../../../../../src/data-access/test-db/mongodb/serialize');
const { fakeAccount } = require('../../../../../src/models/account');

describe('Unit test', () => {
	test('checking whether serialize method', () => {
		const dummyAccount = {
			_id: faker.datatype.uuid(),
			...fakeAccount(),
		};

		const account = serialize(dummyAccount);

		expect(account).toHaveProperty('id');
		expect(account).not.toHaveProperty('_id');
		expect(account).toHaveProperty('name');
		expect(account.name).toHaveProperty('first');
		expect(account.name).toHaveProperty('last');
		expect(account).toHaveProperty('phone');
		expect(account.phone).toHaveProperty('primary');
		expect(account).toHaveProperty('email');
		expect(account).toHaveProperty('createdAt');
		expect(account).toHaveProperty('deletedAt');
		expect(account.id).toBe(dummyAccount._id);
		expect(account.name.first).toBe(dummyAccount.name.first);
		expect(account.name.last).toBe(dummyAccount.name.last);
		expect(account.phone.primary).toBe(dummyAccount.phone.primary);
		expect(account.email).toBe(dummyAccount.email);
	});
});
