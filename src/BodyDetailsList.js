import React, { Component } from 'react';
import BodyDetails from './BodyDetails';
import { Form } from 'antd';

/* 
  BodyDetailsList looped through the body field of the object and renders the BodyDetails component.

*/ 

class BodyDetailsList extends Component {
	render() {
		const WrappedBodyDetails = Form.create()(BodyDetails);
		if(this.props.obj){
			const body = [];
			for (var key in this.props.obj) {
				const title = this.props.obj[key].name,
					  type = this.props.obj[key].type,
					  min = this.props.obj[key].min ? this.props.obj[key].min : null,
					  max = this.props.obj[key].max ? this.props.obj[key].max : null,
					  placeholder = this.props.obj[key].placeholder ? this.props.obj[key].placeholder  : null,
					  required = this.props.obj[key].required ? this.props.obj[key].required  : null,
					  pattern = this.props.obj[key].pattern ? this.props.obj[key].pattern  : null;

				body.push(
					<WrappedBodyDetails key={key} data={this.props.data} title={title} type={type} min={min} max={max} placeholder={placeholder} required={required} pattern={pattern} />
				);
			}
			return (
				<div className="margin-bottom">
					<h3 className="headers">{this.props.name}</h3>
					<Form>
						<ul>{body}</ul>
					</Form>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default BodyDetailsList;