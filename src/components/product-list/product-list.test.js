import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductList from './product-list';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { HashRouter as Router, Switch } from 'react-router-dom';

let productList, mock;

const props = {
    location: {
        search: '?search=test'
    }
};

const dataResponse = [{
    id: 123,
    title: 'Test titulo',
    picture: 'foto/test.png',
    price: {
        currency: 'ARS',
        amount: 123
    },
    condition: 'new',
    freeShipping: true,
    location: 'Cordoba'
},
{
    id: 1234,
    title: 'Test titulo',
    picture: 'foto/test.png',
    price: {
        currency: 'ARS',
        amount: 123
    },
    condition: 'new',
    freeShipping: true,
    location: 'Cordoba'
}];

beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet('/api/items?q=test').reply(200, { items: dataResponse, categories: ['Categoria 1', 'Categoria 2'] });
    productList = mount(<Router><Switch {...props}><ProductList /></Switch></Router>);
});

describe("ProductList", () => {
    it("debería renderizar el componente", () => {
        const component = shallow(<ProductList {...props} />);
        expect(component.getElements()).toMatchSnapshot();
    });
    it("deberia mostar los resultados de la busqueda", () => {
        productList.update();
        expect(productList.find('.product-categories').length).toEqual(1);
        expect(productList.find('.product-list ol li').children().length).toEqual(2);
    });
});