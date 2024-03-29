import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import { useCart } from '../Context/CartContext';

const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }   else {
            setScrollNav(false);
        }
    }

    const { cartCount } = useCart();

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={ scrollNav }>
            <NavbarContainer>
                <NavLogo to='/' onClick={ toggleHome }>Ultimate Goal</NavLogo>
                <MobileIcon onClick={ toggle }>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' 
                        smooth={ true } duration={ 500 } spy={ true } exact='true' offset={ -80 } 
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='journeys'
                        smooth={ true } duration={ 500 } spy={ true } exact='true' offset={ -80 }
                        >Journeys</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='packages'
                        smooth={ true } duration={ 500 } spy={ true } exact='true' offset={ -80 }
                        >Packages</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={ true } duration={ 500 } spy={ true } exact='true' offset={ -80 }
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/cart'>Cart ({ cartCount })</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar