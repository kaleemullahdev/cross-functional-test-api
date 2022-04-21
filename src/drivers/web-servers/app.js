const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(cors());
app.use((_, response, next) => {
	response.set('access-control-allow-origin', '*');
	response.set('access-control-allow-headers', '*');
	response.set('access-control-allow-methods', '*');
	next();
});
app.use(routes);

module.exports = app;
