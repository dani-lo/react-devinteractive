/////////////////
var RDCollect = require("./RDCollect.js"),
	_	 = require("lodash");

class RDBridge {
	//
	constructor (options) {
		//
		this.component = {
			view: options.reactView,
			dataset: new RDCollect(options)
		}

		return this;
	}
	//
}

module.exports = RDBridge;