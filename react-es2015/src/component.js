import React from 'react';

export class Component extends React.Component {
	constructor(props){
		super(props);
		this.state = {count: 0};	
	}

	handleClick = () =>{
		console.log('click');
		this.setState({count:this.state.count + 1});
	};
	
	render() {
		return <p onClick={this.handleClick}>{this.state.count}</p>;
	}
}
