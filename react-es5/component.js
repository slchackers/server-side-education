var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {count: 0};
	},
	handleClick: function(){
		this.setState({count:this.state.count + 1});
	},
        render: function(){
		var countText = this.state.count;
		return React.DOM.p({onClick:this.handleClick},this.state.count);
	}
});
