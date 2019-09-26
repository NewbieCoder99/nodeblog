'use strict';

const checkSession = require('../../libraries/checkSession');
const xhrRequest = require('../../libraries/xhrRequest');
const model = require('../../models');
const datatable = require(`sequelize-datatable`);
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const slug = require('slug');

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
	* Datatable Schema
	*/
	var getArticles = new Promise(function(resolve) {

		var whereLike = {};

		if(req.query.search.value != '') {
			var whereLike = {
				title : {
					[Op.like] : '%' + req.query.search.value + '%'
				}
			}
		}

		console.log(whereLike)

		model.Articles.findAll({
			include : [
				{
					model : model.Categories,
					attributes : [
						'name'
					],
				},
				{
					model : model.User,
					attributes : [
						'email',
						'username'
					],
				},
			],
			offset : parseInt(req.query.start),
			limit : parseInt(req.query.length),
			where : whereLike
		}).then(callBack => resolve(callBack));

	});

	getArticles.then(function(callBack) {
		res.json({
			draw : parseInt(req.query.draw),
			data : callBack,
			recordsFiltered : callBack.length,
			recordsTotal : callBack.length
		});
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