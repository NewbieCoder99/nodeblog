'use strict';

const checkSession = require('../../libraries/checkSession');
const xhrRequest = require('../../libraries/xhrRequest');
const model = require('../../models');

exports.index = function(req, res, next) {

	/*
	* Check Session
	*/
	checkSession.test(req, res);

	/*
	* Check Categories With Promise
	*/
	var getCategories = new Promise(function(resolve) {
		model.Categories.findAll({
			order: [
				['id','DESC']
			]
		}).then(callBack => resolve(callBack));
	});

	getCategories.then(function(callBack) {
		res.render('adminpanel/categories/index', {
			record : callBack.length,
			data : callBack,
		});
	});

}

exports.create = function(req, res, next) {

	/*
	* Check Session
	*/
	checkSession.test(req, res);

	/*
	* Render View
	*/
	res.render('adminpanel/categories/create');
}
