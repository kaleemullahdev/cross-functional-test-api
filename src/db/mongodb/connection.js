const mongoose = require('mongoose');
const { mongo } = require('../../config/index');

const CONNECTION_STRING_MONGO = `mongodb://${mongo.MONGO_USER}:${mongo.MONGO_PWD}@${mongo.MONGO_HOST}:${mongo.MONGO_PORT}`;

// Mongoose connection
mongoose
	.connect(CONNECTION_STRING_MONGO, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.catch((error) =>
		console.log('error', 'Mongoose connection Issue:', error),
	);

// Connectivity status on connection establishment
mongoose.connection.on('connected', () =>
	console.log('info', 'Mongoose connection:', 'Connection Established'),
);

// Connectivity status on connection resetting
mongoose.connection.on('reconnected', () =>
	console.log('info', 'Mongoose connection:', 'Connection Reestablished'),
);

// Connectivity status on disconnection
mongoose.connection.on('disconnected', () =>
	console.log('info', 'Mongoose connection:', 'Connection Disconnected'),
);

// Connectivity Status on connection close
mongoose.connection.on('close', () =>
	console.log('info', 'Mongoose connection Issue:', 'Connection Closed'),
);

// Connectivity Status on error
mongoose.connection.on('error', (error) =>
	console.log('error', 'Mongoose connection Issue:', error),
);

module.exports = mongoose;
