import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import ProductDetail from './components/product-detail/product-detail';
import ProductList from './components/product-list/product-list';
import { Route, Switch, HashRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route exact path="/" render={(props) => <App {...props}></App>} />
            <Route path="/items/:id" render={(props) => (
                <IntlProvider locale="en">
                    <App {...props}>
                        <ProductDetail {...props} />
                    </App>
                </IntlProvider>)} />
            <Route path="/items" render={(props) => (
                <IntlProvider locale="en">
                    <App {...props}>
                        <ProductList {...props} />
                    </App>
                </IntlProvider>)} />
        </Switch>
    </HashRouter>
), document.getElementById('root'));
