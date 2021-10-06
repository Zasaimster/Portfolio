import styled, { keyframes } from "styled-components";
import { theme } from "../../constants/theme";

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? theme.lightBg : theme.darkBg)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 450px) {
    padding: 50px 0;
    margin-bottom: -75px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-height: 600px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 700px;
  //change
  padding-top: 0;
  padding-bottom: 170px;

  @media screen and (max-width: 540px) {
    width: auto;
    max-width: 540px;
  }
  animation: ${fadeIn} 1s;
  transition: 1s all ease-in-out;
`;

export const Date = styled.p`
  color: ${({ lightText }) =>
    lightText ? theme.lightTextColor : theme.darkTextColor};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 12px;
  margin-top: 12px;

  animation: ${fadeIn} 1s;
`;

export const Heading = styled.h1`
  margin-bottom: 5px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? theme.lightTextColor : theme.darkTextColor};

  @media screen and (max-width: 480px) {
  }
`;

export const Link = styled.p`
  color: ${theme.mainColor};
  font-style: italic;
  cursor: pointer;
  width: fit-content;
  display: inline-block;

  position: relative;

  &::after {
    transition: all ease-in-out 200ms;
    background: none repeat scroll 0 0 ${theme.mainColor};
    content: "";
    display: block;
    height: 2px;
    width: 0;
    margin-top: 3px;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  & a {
    text-decoration: none;
    color: ${theme.mainColor};
  }
`;

export const Subtitle = styled.p`
  //max-width: 500px;
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? theme.darkTextColor : "#fff")};

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }

  @media screen and (max-width: 300px) {
    font-size: 14px;
  }
`;
