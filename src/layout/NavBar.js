import React from 'react';
import { useLocation } from 'react-router';
import { Nav, NavLink, NavBtn, NavBtnLink, ScrollLink } from './NavBarElements';


const NavBar = (props) => {
  
  return(
    <>
      <Nav {...props}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mentors">Mentors</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
    </>
  )
}
export default NavBar;

