"use strict";
//
var React = require('react'),
	ReactDOM = require('react-dom');
//
var LoginForm = require('../dom/form/LoginForm.react');
//
//
class LoginPage {
	//
	constructor (options) {
		this.title = options.title || null;
	}
	//
	mount () {
		//
		var domLoginFormTarget = document.getElementById('devint-login-form');
		//
		ReactDOM.render(<LoginForm/>, domLoginFormTarget);
	}
	
}
//
module.exports = LoginPage;