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
		var d = this.props.d;

		return (
			<li className="start">
			<h2>{d.cname}</h2>
			<h3>{d.cdesc}</h3>
			<h3>{d.title} | <span>{d.date}</span></h3>
			<h4>{d.tech}</h4>
			<p>{d.description.map(function (item) {
				return <span>{item}</span>
			})}</p>
			</li>
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