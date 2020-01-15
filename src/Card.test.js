import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('displays title and content', () => {
        const tree = renderer
            .create(
                <Card title='foo' content='bar' />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders empty if no title or content is given', () => {
        const tree = renderer
            .create(
                <Card />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});