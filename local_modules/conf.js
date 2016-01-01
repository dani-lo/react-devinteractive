var APPCONF = {
	"dbconn": "mongodb://dani:danidev@ds045684.mongolab.com:45684/devinteractive",
	"secret": "12woKjh7343ww02_P3n22xyT9",
	"auth": {
		"github": {
			"clientID": "7e8a72edfb8e3627963a",
			"clientSecret": "8c41479db72a864066b28b8ca615984b10d8780f",
			"callbackURL": "http://localhost:3000/auth/callback"
		}
	},
	"mquery": {
		"userByEmailPass": function (email, password) {
			"use strict";
			return {$and:[{"email": email}, {"password": password}]};
		}
	}
};

module.exports = APPCONF;