import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import * as Styled from "./Navbar.styled";
import { FaBars } from "react-icons/fa";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Styled.Nav scrollNav={scrollNav}>
        <Styled.NavbarContainer>
          <Styled.NavLogo to='/' onClick={toggleHome}>
            Saim Ahmad
          </Styled.NavLogo>
          <Styled.MobileIcon onClick={toggle}>
            <FaBars />
          </Styled.MobileIcon>
          <Styled.NavMenu>
            <Styled.NavItem>
              <Styled.NavLinks
                to='about'
                smooth='true'
                duration={300}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
              </Styled.NavLinks>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLinks
                smooth='true'
                duration={300}
                spy='true'
                exact='true'
                offset={-80}
                to='experience'
              >
                Experience
              </Styled.NavLinks>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLinks
                smooth='true'
                duration={300}
                spy='true'
                exact='true'
                offset={-80}
                to='projects'
              >
                Projects
              </Styled.NavLinks>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLinks
                smooth='true'
                duration={300}
                spy='true'
                exact='true'
                offset={-80}
                to='contact'
              >
                Contact
              </Styled.NavLinks>
            </Styled.NavItem>
          </Styled.NavMenu>
          <Styled.NavBtn>
            <Styled.NavBtnLink
              smooth='true'
              duration={300}
              spy='true'
              exact='true'
              offset={-80}
              to='/signin'
            >
              Sign in
            </Styled.NavBtnLink>
          </Styled.NavBtn>
        </Styled.NavbarContainer>
      </Styled.Nav>
    </>
  );
};

export default Navbar;
