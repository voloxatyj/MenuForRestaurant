import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {ButtonContainer} from './Button';

const Navbar = () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 mb-5">
            <Link to="/" className="nav-link"><span className="navbar-brand mb-0 h1 mx-auto">Menu</span><i className="fas fa-hamburger navbar-brand p-2 mb-0"></i></Link>
            <Link to="/order" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-5">
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    your order
                </ButtonContainer>
            </Link>
        </NavWrapper>
      
    )
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize!important;
}
`

export default Navbar;