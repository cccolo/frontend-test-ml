import React, { Component } from 'react';
import ResizeImage from 'react-resize-image'
import { FormattedNumber } from 'react-intl';
import ProductCategories from '../product-categories/product-categories.js';
import Spinner from '../spinner/spinner.js';
const axios = require('axios');
require('./product-detail.scss');


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
    axios.get(path).then(response => this.setState({ response: response.data })).catch(error => console.log(error));
  }

  renderProductDetail() {
    const { item } = this.state.response;
    if (item) {
      return (
        <div className="product-detail-container">
          <div className="col-1">
            <ResizeImage src={item.picture} alt={item.title} options={{ width: 680, height: 680 }} />
          </div>
          <div className="col-2">
            <span className="sold-items">{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.soldQuantity} vendidos</span>
            <p className="title">{item.title}</p>
            <p className="price"><FormattedNumber value={item.price.amount} style="currency" currency='USD' /></p>
            <button className="button">Comprar</button>
          </div>
          <div className="col-3">
            <h1>Descripción del producto</h1>
            <p>{item.description}</p>
          </div>
        </div>)
    }
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <ProductCategories {...response} />
        {response ? this.renderProductDetail() : <Spinner />}
      </div>
    );
  }
}

export default ProductDetail;