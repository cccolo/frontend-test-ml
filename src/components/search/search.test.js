import React from 'react';
import { shallow } from 'enzyme';
import Search from './search';

describe("Search", () => {
    it("debería renderizar el componente", () => {
        const component = shallow(<Search />);
        expect(component.getElements()).toMatchSnapshot();
    });
});