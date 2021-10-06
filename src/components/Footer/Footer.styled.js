import styled, { keyframes } from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { theme } from "../../constants/theme";

const fadeIn = keyframes`
  to { opacity: 1; }
`;

export const FooterContainer = styled.div`
  text-align: center;
  background: ${theme.darkBg};
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const FooterWrapper = styled.div`
  z-index: 3;
`;

export const LinkContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  @media screen and (max-width: 1070px) {
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: center;
    gap: 50px;
    padding-bottom: 35px;
  }
`;

export const FooterLinkedIn = styled(AiFillLinkedin)`
  color: ${theme.mainColor};
  width: 32px;
  height: 32px;
  margin-left: 12px;

  opacity: 0;
  animation: 350ms ${fadeIn} ease-out forwards;

  transition: 100ms all ease-in-out;
  &:hover {
    transition: 100ms all ease-in-out;
    transform: scale(1.2);
  }

  @media screen and (max-width: 1070px) {
    margin: 0;
  }
`;

export const FooterGithub = styled(AiFillGithub)`
  color: ${theme.mainColor};
  width: 32px;
  height: 32px;
  margin-left: 12px;

  transition: 100ms all ease-in-out;

  opacity: 0;
  animation: 350ms ${fadeIn} 300ms ease-out forwards;

  &:hover {
    transition: 100ms all ease-in-out;
    transform: scale(1.2);
  }

  @media screen and (max-width: 1070px) {
    margin: 0;
  }
`;

export const FooterEmail = styled(AiOutlineMail)`
  color: ${theme.mainColor};
  width: 32px;
  height: 32px;
  margin-left: 12px;

  transition: 100ms all ease-in-out;

  opacity: 0;
  animation: 350ms ${fadeIn} 600ms ease-out forwards;

  &:hover {
    transition: 100ms all ease-in-out;
    transform: scale(1.2);
  }

  @media screen and (max-width: 1070px) {
    margin: 0;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  color: ${theme.lightBg};
`;
