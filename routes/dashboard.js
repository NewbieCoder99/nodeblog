var express = require('express'),
	homeController = require('../controllers/dashboards/homeController'),
	articlesController = require('../controllers/dashboards/articlesController'),
	categoriesController = require('../controllers/dashboards/categoriesController'),
	usersController = require('../controllers/dashboards/usersController'),
	route = express.Router();

route.get('/', homeController.index);
route.get('/articles', articlesController.index);
route.get('/articles/create', articlesController.create);
route.get('/categories/create', categoriesController.create);
route.get('/users', usersController.index);

module.exports = route;
