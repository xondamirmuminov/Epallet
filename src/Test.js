import React from 'react';
import Header from './Header';
import {
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import Frozen from './Frozen';
import { Component } from 'react';

export default class Test extends Component{
    render(){
        return(
            <BrowserRouter>
                <section>
                    <Link to="/frozen">Frozen</Link>
                    <Link to="/header">Header</Link>
                </section>
                <Route path="/header" component={Header}/>
                <Route path="/frozen" component={Frozen}/>
            </BrowserRouter>
        )
    }
}