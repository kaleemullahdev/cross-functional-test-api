const accountRoutes = require('./account.routes');

//  General endpoints registering in list
//  List is iteratively registered in main index file
//  This file has public routes only
const routes = [
	{
		path: '/',
		route: accountRoutes,
	},
];

module.exports = routes;
