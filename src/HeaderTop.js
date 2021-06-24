import React from 'react';
import { HeaderTop2, HeaderTopLink, Container, HeaderInner } from './style';
import { FaMapMarkedAlt } from 'react-icons/fa';


const HeaderTop = () => {
    return (
        <HeaderTop2>
            <Container>
                <HeaderInner>
                <div>
                    <HeaderTopLink href="#">En</HeaderTopLink>
                    <HeaderTopLink href="#"> <FaMapMarkedAlt /> Austin, TX</HeaderTopLink>
                </div>
                <div>
                    <HeaderTopLink href="#">+ 1(800)532 6220</HeaderTopLink>
                    <HeaderTopLink href="#">Help Center</HeaderTopLink>
                </div>
                </HeaderInner>
            </Container>
        </HeaderTop2>
    )
}

export default HeaderTop;