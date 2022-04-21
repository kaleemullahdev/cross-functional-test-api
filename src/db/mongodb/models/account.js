const mongoose = require('../connection');

const AccountSchema = new mongoose.Schema({
	name: {
		first: String,
		last: String,
	},
	phone: {
		primary: { type: String },
	},
	email: { type: String },
	password: String,
	createdAt: { type: Date, default: Date.now },
	deletedAt: { type: Date },
});

const Account = mongoose.model('account', AccountSchema);

module.exports = Account;
