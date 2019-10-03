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
	/*
	* Sequelize Datatable
	*/
	datatable(model.Clients, req.query, {
		// Todo
	}).then((result) => {
		res.json(result);
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
}