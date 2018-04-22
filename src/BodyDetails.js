import React, { Component } from 'react';
import { Input, Form, FormItem } from 'antd';

/* 
 	BodyDetails utilizes the 'Ant Design Library' method for validation. 
 	The validation function, getFieldDecorator, takes the type (ie email, text), and the rules as an object
 	BodyDetails creates the rules through checking the type and fields of the body. 

 	The saveData function uses an object passed down through the parent (ExplorerComponent) to save the user's input value
*/ 

class BodyDetails extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		const FormItem = Form.Item;
		var saveData = (event) => {
			this.props.data[this.props.title] = event.target.value;
		};

		var rulesObj = [];
		if(this.props.type === 'email'){
			rulesObj.push({type: 'email', message: 'The input is not valid E-mail!'});
		}
		if(this.props.required){
			rulesObj.push({required: true, message: 'Please enter a valid '+this.props.title});
		}
		if(this.props.pattern){
			rulesObj.push({pattern: new RegExp(this.props.pattern), message: 'Please follow the pattern ' + this.props.pattern})
		}
		return (
			<div className="margin-bottom">
				<FormItem label={this.props.title} required={this.props.required}>
					{getFieldDecorator(this.props.type, {
						rules: rulesObj
					})(
						<Input onChange={saveData} className="half-size" minLength={this.props.min} maxLength={this.props.max} placeholder={this.props.placeholder} />
					)}
				</FormItem>
			</div>
		);
	}
}

export default BodyDetails;