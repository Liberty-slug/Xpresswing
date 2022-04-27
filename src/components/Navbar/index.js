import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn,NavBtnLink } from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
    <>   
        <Nav className='fixed-top'>
            <NavbarContainer>
                <NavLogo to="/">Xpresswings</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu className="mt-4">
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team">Our Team</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signin">Signin</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Signup</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar