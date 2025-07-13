import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/products" component={ProductListing} />
                <Route path="/cart" component={ShoppingCart} />
            </Switch>
        </Router>
    );
};

export default App;
