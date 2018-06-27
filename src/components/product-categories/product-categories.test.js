import React from 'react';
import { shallow } from 'enzyme';
import ProductCategories from './product-categories';

describe("ProductCategories", () => {
    it("debería renderizar el componente", () => {
        const component = shallow(<ProductCategories />);
        expect(component.getElements()).toMatchSnapshot();
    });
    it("deberia mostar categorias", () => {
        const categories = {
            categories: ['Categoria 1', 'Categoria 2', 'Categoria 3']
        };
        const component = shallow(<ProductCategories {...categories} />);
        const cat = component.find('span');
        expect(cat.text()).toEqual('Categoria 1 > Categoria 2 > Categoria 3');
    });
});