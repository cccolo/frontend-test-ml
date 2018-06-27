import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import ProductDetail from './components/product-detail/product-detail';
import ProductList from './components/product-list/product-list';

render((
    <Router>
        <App>
            <Switch>
                <Route path="/items/:id" component={ProductDetail} />
                <Route path="/items" component={ProductList} />
            </Switch>
        </App>
    </Router>
), document.getElementById('root'));
