import React, { Component } from 'react';

/* 
  Details Component returned a list with the key // values of the object
*/ 

class Details extends Component {
	render() {
		return (
			<li><span className="name">{this.props.title}</span>: <span>{this.props.value}</span></li>
		);
	}
}

export default Details;