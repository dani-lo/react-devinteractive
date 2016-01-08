/** @jsx React.DOM */
//
var React 		= require('react'),
	ReactDOM 	= require('react-dom');
//
var RDCollect 	= require('../lib/RDCollect'),
	RDConf 		= require('../lib/RDConfig');
//
var CvList 		= require('../dom/list/ListCv.react');
/**
*
*
*
*/
function CvPage (options) {
	//
	this.title = options.title || null;
	//
	this.collection =  new RDCollect({
		url: RDConf.api.jobs.url
	});
}
//
CvPage.prototype.mount = function () {
	//
	var domCv = document.getElementById('devint-cv');

	this.collection.retrieve().then(() => {
		//
		ReactDOM.render(<CvList cv={this.collection.flatten()} />, domCv);
	});
	
}
//
CvPage.prototype.unmount = function () {
	//
	var domCv = document.getElementById('devint-cv');
	//
	ReactDOM.unmountComponentAtNode(domCv);
}
//
module.exports = CvPage;