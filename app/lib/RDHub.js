/////////////////
//var RDBridge = require("./RDBridge.js");
"use strict";

var Router = require("../util/router");

var instance = null;

class RDHub {
	//
	constructor () {
		//
		if (instance !== null) {

	        throw new Error("Cannot instantiate more than one RDHub");
	    }
	    
	    this.initialize();
	}

	initialize () {
		// configuration
		Router.config({ mode: 'history'});
		//
		this.appRouter = Router;
		// returning the user to the initial state
		//Router.navigate();
		this.currPageView = null;
		//
		this.listeners = {};
	}

	setCurrentPageView (pageView) {
		//
		this.currPageView = pageView;

		return this;
	}

	unmountCurrentPageView () {

		this.currPageView && this.currPageView.unmount();
		
		return this;
	}
	
	registerListener (ev, action) {
		//
		this.listeners[ev] = action;
	}
	
	invokeListener (ev, options) {
		//
		if (this.listeners[ev]) {
			//
			this.listeners[ev].call(null, options);
		}
	}
}

function getInstance () {
	//
    if (instance === null) {
        //
        instance = new RDHub();
    }
    //
    return instance;
}

module.exports = getInstance();