const validator = (schema) => (payload) => {
	const { error } = schema.validate(payload, { abortEarly: false });

	if (error) {
		const errors = error.details.map((el) => ({
			field: el.path[0],
			message: el.message.replace('"', '').replace('"', '').toLowerCase(),
		}));
		return {
			errors,
		};
	}
	return true;
};

module.exports = validator;
