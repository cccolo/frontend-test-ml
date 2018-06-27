import React, { Component } from 'react';
import './product-categories.scss';

class ProductCategories extends Component {

    constructor() {
        super();
    }

    renderCategories() {
        const { categories } = this.props;
        if (categories) {
            return (<span>{categories.join(' > ')}</span>)
        }
    }

    render() {
        return (
            <div className="product-categories">
                {this.renderCategories()}
            </div>
        );
    }
}

export default ProductCategories;