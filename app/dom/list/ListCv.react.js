//
var React = require('react');
//
var ListCv= React.createClass({
	//
	getInitialState: function() {
		return {

		};
	},
	//
	render: function() {
		//
		var d = this.props.cv,	
			items = d.map(function (dItem) {
				return <li>
					<h3>{dItem.title}</h3>
					<h4>{dItem.company}</h4>
					<p className="cv-list_date">{dItem.date}</p>
					<p className="cv-list_tech">{dItem.tech}</p>
					<p>{dItem.description}</p>
					<ul>{
						Array(dItem.images).fill().map((x,i)=>i)
					}</ul>
				</li>
			});

		return (
			<ul className="cv-list">
				{items}
			</ul>
		);
	}
});

module.exports = ListCv;