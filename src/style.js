import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    .product__title{

    }
    a {
        text-decoration: none;
    }
`
const HeaderTop2 = styled.header`
    width: 100%;
    background-color: hsl(212deg 72% 59%);
   
`
const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
`

const HeaderTopLink = styled.a`
    color: white;
    font-size: 18px;
    text-decoration: none;
    font-weight: 400;
    margin-right: 60px;
`
const Header2 = styled.header`
    .header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0;
    }
    .header__img {
        width: 100%;
        max-width: 140px;
    }
    .header__inp, .header__select {
        padding: 10px;
        width: 300px;
        border: 2px solid gainsboro;
        border-radius: 4px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-size: 16px;
        color: gray;
        margin-left: 40px;
        display: block;
    }
    .header__select {
        padding: 9px;
        width: 150px;
        margin-left: 4px;
    }

    
`
const HeaderLink = styled.a`
    color: hsl(212deg 72% 59%);
    font-size: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    margin-left: 50px;
`
const HeaderText = styled.a`
    color: #9eaaba;
    font-size: 18px;
    text-decoration: none;
`

export {
    HeaderTop2,
    HeaderTopLink,
    Container,
    HeaderInner,
    Header2,
    HeaderLink,
    HeaderText
};