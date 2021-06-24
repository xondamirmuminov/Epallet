import React from 'react';
import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';
import { Container } from './style';
import Product from './Product';
import TableBody from './TableBody';

function Links() {
    return (
        <BrowserRouter>
            <section>
                <Container>
                    <div className="d-flex j-between">
                        <NavLink exact activeClassName="link__active" to="/food" >Food Service</NavLink>
                        <NavLink exact activeClassName="link__active" to="/health" >Healthy & Beauty</NavLink>
                        <NavLink exact activeClassName="link__active" to="/indust" >Industrial Ingredients</NavLink>
                        <NavLink exact activeClassName="link__active" to="/beverages" >Beverages</NavLink>
                        <NavLink exact activeClassName="link__active" to="/pet" >Pet Suppilies</NavLink>
                        <NavLink activeClassName="link__active" to="/">Frozen</NavLink>
                        <NavLink exact activeClassName="link__active" to="/cleaning" >Cleaning Products</NavLink>
                    </div>
                </Container>
            </section>
            <Switch>
                <Route path="/food" />
                <Route path="/health" />
                <Route path="/indust" />
                <Route path="/beverages" />
                <Route path="/beverages" />
                <Route path="/pet" />
                <Route path="/cleaning" />
                <Route path="/" component={Product} />
            </Switch>
        </BrowserRouter>
    )
}

export default Links;