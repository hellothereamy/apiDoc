import React, { Component } from 'react';
import ExplorerComponent from './ExplorerComponent';

/* 
  List Component holds the JSON object and then maps over the items 
  in the object to pass the correct props + render the explorer component
*/ 

class ListComponent extends Component {
  render() {
    const jsonObj = [
      {
        title: 'Add new user',
        url: 'https://jsonplaceholder.typicode.com/',
        method: 'POST',
        headers: {
          'authorization': 'Bearer eawke!ddxaweaarglebargleaw,1',
          'content-Type': 'application/json'
        },
        body: [
          {
            name: 'email',
            type: 'email',
            max: 24,
            min: 3,
          },
          {
            name: 'full-name',
            type: 'text',
            placeholder: 'John Doe',
            required: true,
          },
          {
            name: 'phone',
            type: 'tel',
            pattern: /\d\d\d-\d\d\d\d/,
          },
        ]
      },
      {
        title: 'Get users',
        url: 'https://jsonplaceholder.typicode.com/',
        method: 'GET',
        headers: {
          charset: 'UTF-8',
        },
      }
    ];

    const apiList = jsonObj.map((item,key) => 
      <ExplorerComponent
        key = {key}
        url={item.url}
        title = {item.title}
        method={item.method}
        headers={item.headers}
        body={item.body}/>
      );

    return (
      <div className="list-container">
          <h2 className="centered">API Documentation</h2>
          <ul>{apiList}</ul>
      </div>
    );
  }
}

export default ListComponent;
