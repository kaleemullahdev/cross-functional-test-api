const express = require('express');

const router = express.Router();
const accountDB = require('../../../../data-access/test-db/mongodb');

router.post('/account', async (request, response) => {
	const result = await accountDB.addAccount(request.body);
	response
		.status(result.status)
		.send({ data: result.data, errors: result.errors });
});

module.exports = router;
