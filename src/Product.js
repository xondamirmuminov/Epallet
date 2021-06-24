import React, { Component } from 'react';
import { Container, HeaderLink, Header2, HeaderText } from './style';
import Mottos from './img/motts.jpg'
import { AiOutlineCloudDownload } from 'react-icons/ai';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            value: 1,
            cost: 32,
            total: 32
        }
    }
    render() {
        const handleChange = (e) => {
            let value2 = e.target.value;
            this.setState({ value: parseInt(value2) })
            this.setState((prevState, props) => ({
                value: prevState.value,
                total: prevState.value * prevState.cost
            }));
        }
        const addValue = () => {
            this.setState((prevState, props) => ({
                value: prevState.value + 1,
                total: (prevState.value + 1) * prevState.cost
            }));
        }
        const removeValue = (e) => {
            this.setState((prevState, props) => ({
                value: prevState.value - 1,
                total: (prevState.value - 1) * prevState.cost
            }));
        }
        return (
            <section className="product">
                <Container>
                    <div className="product__inner">
                        <div>
                            <img className="product__img" src={Mottos} />
                            <div className="product__inner-img">
                                <img className="product__img--small" src={Mottos} />
                                <img className="product__img--small" src={Mottos} />
                                <img className="product__img--small" src={Mottos} />
                                <img className="product__img--small" src={Mottos} />
                            </div>
                        </div>
                        <div className="">
                            <h3 className="product__subtitle">MOTT'S</h3>
                            <h1 className="product__title">Mott's Unsweetened Applesauce</h1>
                            <h3 className="product__subtitle">Pack  Size: 24/16.90 oz</h3>
                            <p className="product__text">Chef Maxwell Applesauce is delicious classic and part of a healthy diet low in saturated fat with 40% Vitamic C.</p>
                            <a className="product__link" href="*"> <AiOutlineCloudDownload />Download Spec Sheet</a>
                            <p className="lead-time">
                                Approx. Lead Time: <b>12 days</b>
                            </p>
                            <p className="info">
                                Information about product was provided by manufaturer
                            </p>
                            <input onChange={handleChange} value={this.state.value} type="number" />
                            <button onClick={addValue}>+</button>
                            <button disabled={!this.state.value} onClick={removeValue}>-</button>
                            <h1>{this.state.total}</h1>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Product;


