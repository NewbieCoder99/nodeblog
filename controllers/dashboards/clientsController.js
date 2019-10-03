'use strict';

const _sess = require('../../libraries/getSession');
const checkSession = require('../../libraries/checkSession');

exports.index = function(req, res, next) {

	/*
	* Check Session
	*/
	checkSession.test(req, res);

	/*
	* Render View
	*/
	res.render('adminpanel/clients/index', {
		title 	: 'Clients',
		sess 	: _sess.getSession(req)
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
	res.render('adminpanel/clients/create', {
		title 	: 'Create Client',
		sess 	: _sess.getSession(req)
	});

}