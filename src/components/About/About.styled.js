import styled from "styled-components";
import { theme } from "../../constants/theme";

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
  height: 860px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 450px) {
    height: 560px;
    padding: 0 12px;
  }

  @media screen and (max-width: 350px) {
    height: 600px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 60% 40%;
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
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${theme.mainColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? theme.darkTextColor : "#fff")};

  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  object-fit: cover;
  max-height: 400px;
  object-fit: 0 -150px;

  @media screen and (max-width: 768px) {
    width: 60%;
    max-height: 300px;
  }

  @media screen and (max-width: 560px) {
    max-height: 250px;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const TagsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
`;

export const Tag = styled.p`
  font-size: 12px;
`;
