import * as Styled from "./Navbar.styled";
import { FaBars } from "react-icons/fa";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Styled.Nav>
        <Styled.NavbarContainer>
          <Styled.NavLogo to='/'> Saim Ahmad </Styled.NavLogo>
          <Styled.MobileIcon onClick={toggle}>
            <FaBars />
          </Styled.MobileIcon>
          <Styled.NavMenu>
            <Styled.NavItem>
              <Styled.NavLinks to='about'> About </Styled.NavLinks>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLinks to='experience'> Experience </Styled.NavLinks>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLinks to='projects'> Projects </Styled.NavLinks>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLinks to='contact'> Contact </Styled.NavLinks>
            </Styled.NavItem>
          </Styled.NavMenu>
          <Styled.NavBtn>
            <Styled.NavBtnLink to='/signin'> Sign in </Styled.NavBtnLink>
          </Styled.NavBtn>
        </Styled.NavbarContainer>
      </Styled.Nav>
    </>
  );
};

export default Navbar;
