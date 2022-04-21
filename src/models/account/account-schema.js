const Joi = require('joi');

module.exports = Joi.object().keys({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	phoneNumber: Joi.string()
		.required(),
	email: Joi.string().email().required(),
	password: Joi.string()
		// .regex(new RegExp('/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g'))
		.required()
		// .messages({
		// 	'string.pattern.base': `Oops! You need a password longer than 8 characters with numbers and letters (One Uppercase, One Lowercase, One Number)`,
		// }),
});
