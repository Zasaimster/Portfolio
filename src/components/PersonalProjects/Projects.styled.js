import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { theme } from "../../constants/theme";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? theme.lightBg : theme.darkBg)};
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 450px) {
    padding: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 3;
  max-height: 860px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 75px 24px 25px 24px;
  justify-content: center;

  @media screen and (max-width: 450px) {
    padding: 55px 24px 25px 24px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-gap: 20px;
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
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: ${theme.mainColor};
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 22px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
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
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? theme.darkTextColor : "#fff")};

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }

  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
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

export const LinksWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 25px;
  max-width: 500px;

  justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const GhLink = styled(AiFillGithub)`
  color: ${theme.lightTextColor};
  width: 28px;
  height: 28px;
  transition: 100ms all ease-in-out;

  &:hover {
    transition: 150ms all ease-in-out;
    color: ${theme.mainColor};
  }
`;

export const WebsiteLink = styled(FiExternalLink)`
  color: ${theme.lightTextColor};
  width: 28px;
  height: 28px;
  transition: 100ms all ease-in-out;

  &:hover {
    transition: 150ms all ease-in-out;
    color: ${theme.mainColor};
  }
`;
