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
					<p className="cv-list_tech">{dItem.tech}</p>
					<p>{dItem.description}</p>
					<ul className="item-img">{
						Array(dItem.images).fill().map((x,i)=><li><img src={"/img/" + dItem.alias + "/" + (i + 1) + ".png"} /></li>)
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