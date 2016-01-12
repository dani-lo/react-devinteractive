"use strict";
//
var React = require('react'),
	ReactDOM = require('react-dom');
//
var HomeBtnActions = require('../dom/btn/BtnHomeActions.react');

class HomePage {
	//
	constructor (options) {
		//
		this.title = options.title || null;

		this.outer = document.getElementById("devint-home");
	}
	//
	mount () {
		//
		ReactDOM.render(<HomeBtnActions/>, this.outer);
		
		this.postRender();
	}
	//
	postRender () {
		//
		setTimeout(function () {
			this.outer.className = "page-outer is-loaded";
		}.bind(this), 100);
	}
	//
	unmount () {
		//
		ReactDOM.unmountComponentAtNode(this.outer);
	}
}
//
module.exports = HomePage;