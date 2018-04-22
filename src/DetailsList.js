import React, { Component } from 'react';
import Details from './Details';

/* 
  DetailsList Components loops through an object and returns the detail component
*/ 

class DetailsList extends Component {
	render() {
		const details = [];
		if(typeof this.props.obj === 'object' && !Array.isArray(this.props.obj)){
			for (var key in this.props.obj) {
				details.push(
					<Details key={key} title={key} value={this.props.obj[key]} />
				);
			}
		} else {
			details.push(this.props.obj);
		}
		return (
			<div className="margin-bottom">
				<h3 className="headers">{this.props.name}</h3>
				<ul>{details}</ul>
			</div>
		);
	}
}

export default DetailsList;