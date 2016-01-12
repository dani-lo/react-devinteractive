"use strict";
//
var React 		= require('react'),
	ReactDOM 	= require('react-dom');
//
var RDCollect 	= require('../lib/RDCollect'),
	RDConf 		= require('../lib/RDConfig');
//
var XpList 		= require('../dom/list/ListXp.react');
/**
*
*
*
*/
class XpPage {

	constructor () {
		//
		this.title = options.title || null;
		//
		this.collection =  new RDCollect({
			url: RDConf.api.xp.url
		});

		this.outer = document.getElementById("devint-xp");
	}
	//
	mount () {
		//
		this.collection.retrieve().then(() => {
			//
			ReactDOM.render(<XpList xp={this.collection.flatten()} />, this.outer);
		});
		
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
module.exports = XpPage;