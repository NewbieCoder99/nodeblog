var express 		= require('express'),
	articlesController = require('../controllers/api/articlesController'),
	categoriesController = require('../controllers/api/categoriesController'),
	usersController = require('../controllers/api/usersController'),
	loginController = require('../controllers/api/loginController'),
	logoutController = require('../controllers/api/logoutController'),
	route = express.Router();

/*
* Articles route
*/
route.get('/articles', articlesController.getAll);
route.post('/articles/store', articlesController.store);
/*
* Categories route
*/
route.post('/categories/store', categoriesController.store);
route.delete('/categories/:id', categoriesController.delete);
/*
* Users route
*/
route.get('/users', usersController.getAll);
/*
* Auth route
*/
route.post('/login', loginController.checkLogin);
route.get('/logout', logoutController.index);

module.exports = route;
