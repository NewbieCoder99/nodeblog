'use strict';

const _sess = require('../../libraries/getSession');
const checkSession = require('../../libraries/checkSession');

exports.index = function(req, res, next) {
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