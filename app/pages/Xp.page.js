/** @jsx React.DOM */
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
function XpPage (options) {
	//
	this.title = options.title || null;
	//
	this.collection =  new RDCollect({
		url: RDConf.api.xp.url
	});
}
//
XpPage.prototype.mount = function () {
	//
	var domXp = document.getElementById('devint-xp');

	this.collection.retrieve().then(() => {
		//
		ReactDOM.render(<XpList xp={this.collection.flatten()} />, domXp);
	});
	
}
//
XpPage.prototype.unmount = function () {
	//
	var domXp = document.getElementById('devint-xp');
	//
	ReactDOM.unmountComponentAtNode(domXp);
}
//
module.exports = XpPage;