const { fakeAccount } = require('../../../../src/models/account');
const validator = require('../../../../src/models/validator');
const schema = require('../../../../src/models/account/account-schema');

describe('validation', () => {
	test('error should be defined', () => {
		const { errors } = validator(schema)({});
		expect(errors).not.toBeUndefined();
		expect(errors).not.toBeNull();
		expect(errors).not.toBe(null);
		expect(errors).not.toEqual(null);
		expect(errors).not.toBe('');
	});

	test('error should be undefined', () => {
		const { error } = validator(schema)({
			...fakeAccount(),
		});
		expect(error).toBeUndefined();
	});
});
