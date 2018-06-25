import React, { Component } from 'react';
import { Link } from "react-router-dom";
import cart from '../../assets/img/ic_shipping.png';
import { FormattedNumber } from 'react-intl';
import ProductCategories from '../product-categories/product-categories.js';
import Spinner from '../spinner/spinner.js';
require('./product-list.scss');
const parseQueryString = require('query-string');
const axios = require('axios');

class ProductList extends Component {

  constructor(props) {
    super();
    this.state = {
      response: '',
    }
  }

  getData(search) {
    const searchPath = `/api/items?q=${search}`
    axios.get(searchPath).then(response => this.setState({ response: response.data })).catch(error => console.log(error));
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      if (location.search && action === 'PUSH') {
        this.setState({ response: '' })
        const { search } = parseQueryString.parse(location.search);
        this.getData(search);
      }
    });

    const { search } = parseQueryString.parse(this.props.location.search);
    this.getData(search);
  }

  renderProductList() {
    const { items } = this.state.response;
    return items.map((item) => {
      return (<li key={item.id}>
        <div className="product-item-container">
          <div className="product-item_img">
            <Link to={`/items/${item.id}`}>
              <img className="product-thumbnail" src={item.picture} />
            </Link>
          </div>
          <div className="product-item_info">
            <p className="price">
              <FormattedNumber value={item.price.amount} style="currency" currency='USD' />
              {item.freeShipping ? <img src={cart} /> : ''}
            </p>
            <Link to={`/items/${item.id}`}>
              <p className="details">{item.title}</p>
            </Link>
          </div>
          <div className="product-item_location">
            <p>{item.location}</p>
          </div>
        </div>
      </li>)
    });
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <ProductCategories {...response} />
        {
          response ?
            <div className="product-list">
              <ol>{this.renderProductList()}</ol>
            </div> : <Spinner />
        }
      </div>
    );
  }
}

export default ProductList;