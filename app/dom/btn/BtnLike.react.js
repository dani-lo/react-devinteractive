/** @jsx React.DOM */
var React = require('react');

var BtnLike = React.createClass({
  //
  getInitialState: function() {
    return {
      liked: false
    };
  },
  //
  handleClick: function(ev) {
    //
    ev.preventDefault();

    this.setState({liked: !this.state.liked});
  },
  //
  render: function() {
    //
    var text = this.state.liked ? 'like' : 'have liked';
    //
    return (
      <a href="#_" onClick={this.handleClick}>
        You {text} this. Click the button .. to toggle.
      </a>
    );
  }
});

module.exports = BtnLike;