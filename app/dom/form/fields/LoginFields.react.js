/**
* @jsx React.DOM
*/
var React 		= require('react'),
	classNames 	= require('classnames');

var valid		= require("../../../util/valid");

var LoginFields = React.createClass({
	//
	getInitialState: function() {
	//
		return {
			validemail: false,
			validpassword: false
		}
	},
	//
	render: function() {
	//
		var inputClass = {
			email: classNames({
				"from-input": "true",
				"untouched": "true",
				"is-valid": this.state.validemail
			}),
			password: classNames({
				"from-input": "true",
				"untouched": "true",
				"is-valid": this.state.validpassword
			})
		};

	return (
		<div>
			<ul className="form-fields">
				<li>
					<label>Email</label>
					<input type="email" className={inputClass.email} placeholder="Email" defaultValue={this.props.fieldValues.email} onChange={this.validate.bind(this, "email")} />
				</li>	
				<li>
					<label>Password</label>
					<input type="password" className={inputClass.password} placeholder="Password"  defaultValue={this.props.fieldValues.password} onChange={this.validate.bind(this, "password")} />
				</li>
				<li className="form-footer">
					<button className="btn-primary pull-right">Come On In</button>
				</li>
			</ul>
		</div>
		)
	},
	//
	validate: function(field, e) {
		//
		var isValid, val;

		val =  e.currentTarget.value;

		isValid = valid(field, val);

		var obj = {};

		obj["valid" + field] = isValid;

		this.setState(obj);

		if (isValid) {
		
			// give visual feedback, classnames on button and input
			this.props.onFieldValid(field, val);
		} else {
		
			this.props.onFieldValid(field, null);
		}
	},
	submit: function (form, e) {
		//
		return this.props.onFormSubmit();
	}
});

module.exports = LoginFields