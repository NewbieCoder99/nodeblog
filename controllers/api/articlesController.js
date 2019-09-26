'use strict';

const checkSession = require('../../libraries/checkSession');
const xhrRequest = require('../../libraries/xhrRequest');
const model = require('../../models');
const datatable = require(`sequelize-datatable`);
const slug = require('slug');

const getData = function(param) {
	// Todo
}

const countData = function(param) {
	// Todo
}

exports.getAll = function(req, res, next) {

	/*
	* Check Session
	*/
	checkSession.test(req,res);

	/*
	* Check request required
	*/
	xhrRequest.test(req,res);

	/*
	* Sequelize Datatable
	*/
	datatable(model.Articles, req.query, {
		// Todo
	}).then((result) => {
		return res.json(result);
	});
}

exports.store = function(req, res, next) {

	/*
	* Check Session
	*/
	checkSession.test(req,res);

	/*
	* Check request required
	*/
	xhrRequest.test(req,res);

	let fileImage = req.files.image;
	let fileName = fileImage.name;
	let fileMimetype = fileImage.mimetype;
	let currentSession = JSON.parse(req.session.userdata);

	if(!req.files || Object.keys(req.files).length === 0) {
	  	return res.json({
	  		error  	: true,
	  		message : 'Image file is required.'
	  	});
	}

	if(fileMimetype != 'image/jpeg') {
		if(fileMimetype != 'image/png') {
			return res.json({
				error  	: true,
				message : 'Image file not allowed to upload.'
			});
		}
	}

	let createArticle = new Promise(function(resolve) {
		model.Articles.create({
			title : req.body.title,
			slug : slug(req.body.title, {
				lower : true
			}),
			categoryId : req.body.categoryId,
			userId : currentSession.id,
			content : req.body.content,
			image : fileName
		}).then(callBack => resolve(callBack));
	});

	createArticle.then(function(callBack) {

		if(callBack == null) {
			return res.json({
				error  	: true,
				message : 'Article was invalid to create.'
			});
		}

		fileImage.mv(process.env.BLOG_IMAGE_PATH + fileName, function(err) {
			if(err) {
			  	return res.json({
			  		error  	: true,
			  		message : err
			  	});
			}

			res.json({
				error  	: false,
				message : 'Your article was created.'
			});
		});
	});
}