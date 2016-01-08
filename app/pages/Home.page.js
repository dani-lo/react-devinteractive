/** @jsx React.DOM */
//
var React = require('react'),
	ReactDOM = require('react-dom');
//
var HomeBtnActions = require('../dom/btn/BtnHomeActions.react');

function HomePage (options) {
	//
	this.title = options.title || null;

	this.outer = document.getElementById("page-outer-home");
}
//
HomePage.prototype.mount = function () {
	//
	var domHomeNavigation = document.getElementById('devint-home-navigation');
	//
	ReactDOM.render(<HomeBtnActions/>, domHomeNavigation);
	//
	setTimeout(function () {
		this.outer.className = "page-outer is-loaded";
	}.bind(this), 100);
	
}
//
HomePage.prototype.unmount = function () {
	//
	var domHomeNavigation = document.getElementById('devint-home-navigation');
	//
	ReactDOM.unmountComponentAtNode(domHomeNavigation);
}
//
module.exports = HomePage;