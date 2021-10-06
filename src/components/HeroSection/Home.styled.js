import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Particles from "react-particles-js";
import { theme } from "../../constants/theme";

export const HeroContainer = styled.div`
  background: ${theme.darkBg};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
`;

export const RainParticles = styled(Particles)`
  width: 100%;
  height: 800px;
  background: ${theme.darkBg};
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  //align-items: center;
`;

export const HeroTopline = styled.p`
  color: ${theme.mainColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  //letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 64px;
  letter-spacing: 4px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h1`
  font-size: 48px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
  letter-spacing: 4px;
`;

export const HeroP = styled.p`
  &:nth-of-type(2) {
    margin-top: 24px;
  }

  &:nth-of-type(3) {
    margin-top: 10px;
  }
  //color: #fff;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  max-width: 150px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
