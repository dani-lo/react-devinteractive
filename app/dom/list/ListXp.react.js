//
var React 		= require('react'),
	ReactDOM 	= require('react-dom');
//
var ItemXp = React.createClass({
	//
	getDefaultPropes: function() {
		return {
			d: {}
		};
	},
	//
	componentDidMount : function () {
		//
		ReactDOM.findDOMNode(this).classList.add('mounted');
	},
	//
	render: function() {
		//
		return (
			<li className="start">{this.props.d.title}</li>
		)
	}
});

var ListXp = React.createClass({
	//
	getInitialState: function() {
		return {};
	},
	//
	render: function() {
		//
		var xp = this.props.xp,	
			items = xp.map(function (dItem) {
				return <ItemXp  d={dItem} />
			});

		return (
			<ul className="cv-list">
				{items}
			</ul>
		);
	}
});

module.exports = ListXp;