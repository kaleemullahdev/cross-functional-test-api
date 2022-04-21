const config = require('./src/config/index');
const server = require('./src/drivers/web-servers/app');

server.listen(config.port, () => {
	console.info(`Server is running on port ${config.port}`);
});
