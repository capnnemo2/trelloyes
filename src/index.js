import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store.js';
import App from './App';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
