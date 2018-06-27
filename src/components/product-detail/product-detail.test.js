import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductDetail from './product-detail';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const props = {
    match: {
        params: {
            id: 123
        }
    }
};

const dataResponse = {
    item: {
        title: 'Titulo',
        picture: 'Foto',
        price: {
            currency: 'ARS',
            amount: 500,
        },
        condition: 'new',
        freeShipping: true,
        description: 'Descripcion',
        soldQuantity: 12,
    },
};

let productDetail, mock;

beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet('/api/items/123').reply(200, dataResponse);
    productDetail = mount(<ProductDetail {...props} />);
});

describe("ProductDetail", () => {
    it("debería renderizar el componente", () => {
        const component = shallow(<ProductDetail {...props} />);
        expect(component.getElements()).toMatchSnapshot();
    });
    it("deberia mostar los detalles para un producto", () => {
        productDetail.update();
        expect(productDetail.state().response).toHaveProperty('item', dataResponse.item);
        expect(productDetail.find('.product-detail-container').length).toEqual(1);
        expect(productDetail.find('.product-detail_info').length).toEqual(1);
    });
});