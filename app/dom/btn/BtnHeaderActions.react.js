//
var RDEvent = require("../../lib/RDEvent"),
	RDHub	= require("../../lib/RDHub");

var React 		= require('react'),
	classNames 	= require('classnames');

var BtnHeaderActions= React.createClass({
	//
	getInitialState: function() {
		return {
			activeBackBtn: false
		};
	},
	//
	componentDidMount: function () {
		//
		RDHub.registerListener("onappnavigate", function (options) {
			//
			this.setState({activeBackBtn: true});
		}.bind(this));
	},
	//
	goToBack: function(ev) {
		//
		ev.preventDefault();

		RDHub.appRouter.goback();
	},
	//
	goToLogout: function(ev) {
		//
		ev.preventDefault();

		RDHub.appRouter.hard("/logout");
	},
	//
	render: function() {
		//
		var btnBackClassname = classNames({
				"btn": "true",
				"unactive": !this.state.activeBackBtn
			});

		return (
			<p className="header-btn">
				<a className={btnBackClassname} href="#_" onClick={this.goToBack}>Back</a>
				<a className="btn" href="#_" onClick={this.goToLogout}>Logout</a>
			</p>
		);
	}
});

module.exports = BtnHeaderActions;