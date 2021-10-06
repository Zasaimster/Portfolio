import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Particles from "react-particles-js";
import { theme } from "../../constants/theme";

const slideIn = keyframes`
  to { transform: translateY(0); opacity: 1; }
`;

export const Container = styled.div`
  background: ${theme.darkBg};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
`;

export const RainParticles = styled(Particles)`
  width: 100%;
  height: 100vh;
  background: ${theme.darkBg};
`;

export const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  //align-items: center;
`;

export const Topline = styled.p`
  color: ${theme.mainColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  //letter-spacing: 1.4px;
  margin-bottom: 16px;

  opacity: 0;
  transform: translateY(100%);
  animation: 350ms ${slideIn} 700ms ease-out forwards;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 64px;
  letter-spacing: 4px;

  opacity: 0;
  transform: translateX(3%);
  animation: 300ms ${slideIn} 1000ms ease-out forwards;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const H2 = styled.h1`
  font-size: 48px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
  letter-spacing: 4px;

  opacity: 0;
  transform: translateX(-3%);
  animation: 300ms ${slideIn} 1100ms ease-out forwards;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const P = styled.p`
  opacity: 0;

  &:nth-of-type(2) {
    margin-top: 24px;
    transform: translateY(40%);
    animation: 300ms ${slideIn} 1200ms ease-out forwards;
  }

  &:nth-of-type(3) {
    margin-top: 10px;
    transform: translateY(20%);
    animation: 300ms ${slideIn} 1400ms ease-out forwards;
  }
  //color: #fff;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BtnWrap = styled.div`
  max-width: 150px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  opacity: 0;
  transform: translateY(100%);
  animation: 300ms ${slideIn} 1500ms ease-out forwards;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
