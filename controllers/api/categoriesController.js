'use strict';

const checkSession = require('../../libraries/checkSession');
const xhrRequest = require('../../libraries/xhrRequest');
const model = require('../../models');
const slug = require('slug');

exports.store = function(req, res, next) {

	/*
	* Check Session
	*/
	checkSession.test(req,res);

	/*
	* Check request required
	*/
	xhrRequest.test(req,res);

	/*
	* Check Categories With Promise
	*/
	var createCategory = new Promise(function(resolve) {
		model.Categories.create({
			name : req.body.category_name,
			slug : slug(req.body.category_name, {lower: true})
		}).then(callBack => resolve(callBack));
	});

	createCategory.then(function(callBack) {
		res.json({
			error  	: false,
			message : "Category was created.",
		});
	});

}

exports.delete = function(req, res, next) {

	/*
	* Check Session
	*/
	checkSession.test(req,res);

	/*
	* Check request required
	*/
	xhrRequest.test(req,res);

	/*
	* Check Categories With Promise
	*/
	var destroyCategory = new Promise(function(resolve) {
		model.Categories.destroy({
		    where: {
		    	id : req.params.id
		    }
		}).then(callBack => resolve(callBack));
	});

	destroyCategory.then(function(callBack) {
		res.json({
			error  	: false,
			message : "Category was deleted.",
		});
	});

}