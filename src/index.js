import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListComponent from './ListComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ListComponent />, document.getElementById('root'));
registerServiceWorker();
