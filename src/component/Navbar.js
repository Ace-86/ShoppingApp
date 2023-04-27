import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './Style/NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to = '/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to ='/shop' activeStyle>
                        Shop
                    </NavLink>
                    <NavLink to= '/checkout' activeStyle>
                        Checkout
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='signin'>
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
