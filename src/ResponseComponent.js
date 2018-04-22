import React, { Component } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;


class ResponseComponent extends Component {
	render() {
		return (
			<div>
				<h3 className="headers">{this.props.name}</h3>
				<TextArea className= "half-size" rows={4} value={JSON.stringify(this.props.data)}/>
			</div>
		);
	}
}

export default ResponseComponent;