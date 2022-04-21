const pingRoutes = require('./ping.routes');

//  General endpoints registering in list
//  List is iteratively registered in main index file
//  This file has public routes only
const routes = [
	{
		path: '/',
		route: pingRoutes,
	},
];

module.exports = routes;
