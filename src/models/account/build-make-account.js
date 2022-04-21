function buildMakeAccount(accountValidator) {
	return ({ firstName, lastName, phoneNumber, email, password } = {}) => {
		const { errors } = accountValidator({
			firstName,
			lastName,
			phoneNumber,
			email,
			password,
		});

		if (errors && errors.length > 0) {
			console.table(errors);
			return { info: null, errors, status: 400 };
		}

		return {
			info: {
				getName: () => ({ first: firstName, last: lastName }),
				getPhone: () => ({
					primary: phoneNumber,
				}),
				getEmail: () => email,
				getPassword: () => password,
			},
			errors: [],
			status: 200,
		};
	};
}

module.exports = buildMakeAccount;
