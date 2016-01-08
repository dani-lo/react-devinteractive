//
var React = require('react');
//
var ItemXp = React.createClass({
	//
	getDefaultPropes: function() {
		return {
			d: {}
		};
	},
	//
	render: function() {
		//
		return (
			<li>{this.props.d.title}</li>
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