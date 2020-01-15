import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={[{ title: 'foo', content: 'bar'}]} headfer='List1'/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders list of cards', () => {
        const tree = renderer
            .create(
                <List cards={[{ title: 'foo', content: 'bar' }]} header='List1' />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});