import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MyLayout from './Component/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyLayout />, document.getElementById('root'));
registerServiceWorker();
