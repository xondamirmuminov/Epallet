import React from 'react';
import HeaderTop from './HeaderTop';
import Header from './Header';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Frozen from './Frozen';
import Links from './Links';
import Test from './Test';
import Product from './Product';
import Table from './Table';

function App(){
    return(
        <div className="App">
            <HeaderTop/>
            <Header/>
            <Links/>
            <Table/>
        </div>
    )
}

export default App;