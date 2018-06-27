import React, { Component } from 'react';
import ProductCategories from '../product-categories/product-categories';
import Spinner from '../spinner/spinner';
import './product-detail.scss';
const axios = require('axios');
const numeral = require('numeral');

class ProductDetail extends Component {

  constructor(props) {
    super();
    this.state = {
      response: '',
    }
  }

  componentDidMount() {
    this.getProductDetail();
  }

  getProductDetail() {
    const path = `/api/items/${this.props.match.params.id}`
    axios.get(path).then((response) =>  this.setState({ response: response.data })).catch(error => console.log(error));
  }

  renderProductDetail() {
    const { item } = this.state.response;
    if (item) {
      return (
        <div className="product-detail__grid-container">
          <div className="product-detail__grid-container-row-1 col-1">
            <img src={item.picture} />
          </div>
          <div className="product-detail__grid-container-row-1 col-2">
            <span className="sold-items">{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.soldQuantity} vendidos</span>
            <p className="title">{item.title}</p>
            <p className="price">{numeral(item.price.amount).format('$0,0.00')}</p>
            <button className="button">Comprar</button>
          </div>
          <div className="product-detail__grid-container-row-2 col-1">
            <h1>Descripción del producto</h1>
            <p>{item.description}</p>
          </div>
        </div>)
    }
  }

  render() {
    const { response } = this.state;
    return (
      <div className="product-detail">
        <ProductCategories {...response} />
        {response ? this.renderProductDetail() : <Spinner />}
      </div>
    );
  }
}

export default ProductDetail;