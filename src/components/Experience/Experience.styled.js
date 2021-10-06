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

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  width: 540px;
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
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? theme.lightTextColor : theme.darkTextColor};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? theme.darkTextColor : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
