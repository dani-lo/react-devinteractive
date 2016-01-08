/** @jsx React.DOM */
//
var React = require('react'),
	ReactDOM = require('react-dom');
//
var LoginForm = require('../dom/form/LoginForm.react');
//
//
function LoginPage (options) {
	//
	this.title = options.title || null;
}
//
LoginPage.prototype.mount = function () {
	//
	var domLoginFormTarget = document.getElementById('devint-login-form');
	//
	ReactDOM.render(<LoginForm/>, domLoginFormTarget);
}
//
module.exports = LoginPage;