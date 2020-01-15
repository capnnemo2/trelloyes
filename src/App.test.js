import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App component', () => {
  it('render the UI as expected', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
