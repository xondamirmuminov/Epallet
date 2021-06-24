import React, { Component } from 'react';
import { Container, HeaderLink, Header2, HeaderText } from './style';
import Logo from './img/logo.svg';
import { FaInbox, FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';

export default class Header extends Component {
    render(){
        return (
            <Header2>
                <Container>
                    <div className="header__inner">
                        <div className="d-flex">
                            <img className="header__img" src={Logo} />
                            <input className="header__inp" type="text" placeholder="Type to search"/>
                            <select className="header__select">
                                <option value="all">All Categories</option>
                            </select>
                        </div>
                        <div className="d-flex">
                            <HeaderLink href="#"><FaInbox className="icon-margin"/>  Orders</HeaderLink>
                            <HeaderLink href="#"><FaShoppingBag className="icon-margin"/>  Cart</HeaderLink>
                            <HeaderLink href="#"><FaUserAlt className="icon-margin"/>  Profile</HeaderLink>
                        </div>
                    </div>
                </Container>
            </Header2>
        )
    }
}
