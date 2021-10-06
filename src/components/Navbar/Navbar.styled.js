import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { theme } from "../../constants/theme";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? theme.darkBg : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const slideDown = keyframes`
  to { transform: translateY(0); opacity: 1; }
`;

const slideDownMobileIcon = keyframes`
  to { transform: translate(-100%, 35%); opacity: 1;}
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  opacity: 0;
  transform: translateY(-100%);
  animation: 350ms ${slideDown} ease-out forwards;

  @media screen and (max-width: 670px) {
    margin-left: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    positon: absolute;
    top: 0;
    right: 0;
    //transform: translate(-100%, 35%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    opacity: 0;
    transform: translateY(-100%);
    animation: 350ms ${slideDownMobileIcon} 50ms ease-out forwards;
  }

  @media screen and (max-width: 450px) {
    transform: translate(-10%, 35%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  opacity: 0;
  transform: translateY(-100%);
  //animation: ${slideDown} 350ms ease-out forwards;

  &:nth-of-type(1) {
    animation: 350ms ${slideDown} 50ms ease-out forwards;
  }

  &:nth-of-type(2) {
    animation: 300ms ${slideDown} 200ms ease-out forwards;
  }

  &:nth-of-type(3) {
    animation: 250ms ${slideDown} 350ms ease-out forwards;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${theme.mainColor};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  opacity: 0;
  transform: translateY(-100%);
  animation: 200ms ${slideDown} 500ms ease-out forwards;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: ${theme.mainColor};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${theme.darkTextColor};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transform: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-ease-in-out;
    background: #fff;
    color: ${theme.darkTextColor};
  }
`;
