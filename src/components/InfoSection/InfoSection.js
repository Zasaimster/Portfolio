import React from "react";
import * as Styled from "./InfoSection.styled";
import { Button } from "../elements/Button.styled";

import ImgData from "../../images/about.svg";

const InfoSection = (props) => {
  console.log(props);
  const { lightBg, lightText, lightTextDesc, dark, primary, darkText, dark2 } =
    props.colorTheme;
  const {
    id,
    imgStart,
    smallHeader,
    header,
    desc1,
    desc2,
    buttonLabel,
    image,
    alt,
    tags,
  } = props.data;
  console.log(imgStart);

  return (
    <>
      <Styled.InfoContainer lightBg={lightBg} id={id}>
        <Styled.InfoWrapper>
          <Styled.InfoRow imgStart={imgStart}>
            <Styled.Column1>
              <Styled.TextWrapper>
                <Styled.TopLine>{smallHeader}</Styled.TopLine>
                {header !== null && (
                  <Styled.Heading lightText={lightText}>
                    {header}
                  </Styled.Heading>
                )}
                <Styled.Subtitle darkText={darkText}>{desc1}</Styled.Subtitle>
                <Styled.Subtitle darkText={darkText}>{desc2}</Styled.Subtitle>
                <Styled.BtnWrap>
                  <Button
                    to='home'
                    smooth='true'
                    duration={500}
                    spy={true}
                    exact='true'
                    ofset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </Styled.BtnWrap>
              </Styled.TextWrapper>
            </Styled.Column1>
            <Styled.Column2>
              <Styled.ImgWrap>
                <Styled.Img src={ImageData} alt={alt} />
              </Styled.ImgWrap>
            </Styled.Column2>
          </Styled.InfoRow>
        </Styled.InfoWrapper>
      </Styled.InfoContainer>
    </>
  );
};

export default InfoSection;
