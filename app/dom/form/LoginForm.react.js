/**
* @jsx React.DOM
*/
"use strict";

var React     	= require('react'),
	classNames 	= require('classnames'),
	assign  	= require('object-assign');

var	rdConf 		= require("../../lib/RDConfig"),
	rdCollect 	= require("../../lib/RDCollect"),
	rdHub 		= require("../../lib/RDHub");

var	LoginFields	= require('./fields/LoginFields.react'),
	AppModal	= require('../widget/Modal.widget');

// Ideally, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
	email    : null,
	password : null
};

var LoginForm = React.createClass({
	//
	collection: new rdCollect({
		url: rdConf.api.login.url
	}),

	getInitialState: function() {
		return {
			submitted: false,
			loaded: false
		}
	},

	saveValues: function(fname, fval) {
		//
		var field = {};

		field[fname] = fval;
		
		return function() {
			fieldValues = assign({}, fieldValues, field);
		}.bind(this)()
	},

	submitLogin: function(e) {
		//
		e.preventDefault();

		var isValidForm = fieldValues.email !== null && fieldValues.password !== null;

		if (isValidForm) {
			
			// send POST login data

			var logonModel = this.collection.createDocument({
					"email": fieldValues.email,
					"password": fieldValues.password,
					"status": null,
					"text": null
				}, true);

			function onLoginSuccess(d) {
				//
				if (logonModel.get("status") === "success") {
					// login failed
					AppModal.setText("Login successful, you are being redirected").setType("success").show(true);
					//
					setTimeout(function () {
						//Router.navigate('/about');
						rdHub.appRouter.hard("/app/home");
					}, 2000);
				} else {
					// login ok
					AppModal.setText("Something went wrong, please try again.").setType("error").show(true);
				}
			}

			function onLoginError (err) {
				//
				AppModal.setText("Something went wrong, please try again.").setType("error").show(true);
			}

			this.collection.persist(logonModel).then(onLoginSuccess, onLoginError);
		}
	},

	modLoaded: function () {
		//
		this.setState({loaded: true});
	},

	render: function() {
		//
		var modClass = classNames({
			"mod-blank": true,
			"mod-loaded": this.state.loaded
		});

		if (!this.state.loaded) {
			setTimeout(function () {
		      //
		      this.modLoaded();
		    }.bind(this), 100);
		}

		return (
			<form action="/login/local" method="POST" onSubmit={this.submitLogin}>
				<div className={modClass}>
					<LoginFields fieldValues={fieldValues} onFieldsLoaded={this.modLoaded} onFieldValid={this.saveValues} />
				</div>
			</form>
		)
	}
});

module.exports = LoginForm;