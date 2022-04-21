const crypto = require('crypto');
const config = require('../../../config');
const Account = require('../../../db/mongodb/models/account');
const { makeAccount } = require('../../../models/account'); // model
const serialize = require('./serialize'); // serializer custom to db

const addAccount = async (accountInfo) => {
	const account = makeAccount(accountInfo);
	if (account.errors.length > 0) {
		delete account.info;
		return { data: null, ...account };
	}

	const isExists = await Account.findOne(
		{
			$or: [
				{ email: account.info.getEmail() },
				{ 'phone.primary': account.info.getPhone().primary },
			],
		},
		{ _id: 0, phone: 1, email: 1 },
	);

	if (isExists && isExists.email === account.info.getEmail()) {
		account.errors.push({
			field: 'email',
			message: 'This email is already in use',
		});
		return { data: null, ...account };
	}

	if (
		isExists &&
		isExists.phone.primary === account.info.getPhone()?.primary
	) {
		account.errors.push({
			field: 'phone',
			message: 'This phone is already in use',
		});
		return { data: null, ...account };
	}

	const newAccount = {
		name: account.info.getName(),
		phone: account.info.getPhone(),
		email: account.info.getEmail(),
	};

	newAccount.password = crypto
		.createHmac('sha256', config.cryptoSecret)
		.update(account.info.getPassword())
		.digest('hex');

	delete account.info;
	return {
		data: await Account.create(newAccount).then(serialize),
		...account,
	};
};

module.exports = {
	addAccount,
};
