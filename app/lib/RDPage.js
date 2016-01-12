"use strict";

var React = require('react'),
	ReactDOM = require('react-dom');
/////////////////
class RDPage {
	//
	constructor (options) {
		//
		this.outer = options.outer || null;
		//
		this.title = options.title || null;

		return this;
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

module.exports = RDPage;