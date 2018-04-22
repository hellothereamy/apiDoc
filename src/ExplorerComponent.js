import React, { Component } from 'react';
import Button from 'antd/lib/button';
import DetailsList from './DetailsList';
import BodyDetailsList from './BodyDetailsList';
import ResponseComponent from './ResponseComponent';
import './index.css';
import { Collapse } from 'antd';

/* 
  ExplorerComponent renders the collaspable panels and the content inside.
  It also holds the functions for the API request

  Note: The reason why there is a details component and a bodyDetails component is because the 
  body object is structured differently then the details component. Details did not require an input field
  Thus, I thought it would be better to create to different components
*/ 

class ExplorerComponent extends Component {
  constructor(props) {
    super(props);

    // holds state of API request
    this.state = {
       status : {},
       data: {}
    };
  }

  render() {
    const Panel = Collapse.Panel;
    let bodyObj = {};
    /*
      sendRequest is a function that constructs the params for the API request and makes the request
    */
    let sendRequest = () => {
      var params = {
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: this.props.headers,
          method: this.props.method, 
          mode: 'cors', 
          redirect: 'follow', 
          referrer: 'no-referrer'
      };
      if(this.props.method === 'POST'){
        params.body = JSON.stringify(bodyObj);
      }

      return fetch(this.props.url+'posts',params)
      .then(response => { this.setState({status: response.status }); return response.json(); })
      .then(response => { this.setState({data: response}); });
    };
    return (
      <div className="explorer-container">
          <Collapse>
            <Panel header={this.props.method + ' ' + this.props.title}>
                <DetailsList name="Headers" obj={this.props.headers} />
                <DetailsList name="Base URL" obj={this.props.url} />
                <BodyDetailsList name="Body" data={bodyObj} obj={this.props.body} />
                <Button className="margin-bottom" type="primary" onClick={sendRequest}>Send Request</Button>
                <ResponseComponent name="Response" data={this.state}/>
            </Panel>
          </Collapse>
      </div>
    );
  }
}

export default ExplorerComponent;
