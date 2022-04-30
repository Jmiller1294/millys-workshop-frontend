import React from 'react';
//import { useLocation } from 'react-router';
import { Nav, NavLink, NavBtn, NavBtnLink, ScrollLink } from './NavBarElements';


const NavBar = (props) => {
  
  return(
    <>
      <Nav {...props}>
        <NavLink to="/">All Products</NavLink>
        <NavLink to="/">Holiday Boxes</NavLink>
        <NavLink to="/">Mens Boxes</NavLink>
        <NavLink to="/">Womens Boxes</NavLink>
        <NavLink to="/">Wedding Boxes</NavLink>
      </Nav>
    </>
  )
}
export default NavBar;

