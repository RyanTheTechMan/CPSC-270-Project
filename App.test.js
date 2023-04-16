import React from 'react';
import renderer from 'react-test-renderer';
import {DiningPage} from './Resources/Menus'

describe('<DiningPage />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<DiningPage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});