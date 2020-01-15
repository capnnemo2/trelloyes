import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('List component', () => {
    it('renders the UI as expected', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});