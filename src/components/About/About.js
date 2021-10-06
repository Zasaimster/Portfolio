import React from "react";
import * as Styled from "./About.styled";
import { Button } from "../elements/Button.styled";
import { theme } from "../../constants/theme";

import ImgData from "../../images/headshot.jpg";

const About = (props) => {
  console.log(props);
  const { lightBg, lightText, lightTextDesc, dark, primary, darkText, dark2 } =
    props.colorTheme;
  const { imgStart, smallHeader, header, desc1, desc2, desc3, alt, tags } =
    props.data;
  console.log(imgStart);

  return (
    <>
      <Styled.InfoContainer lightBg={lightBg} id='about'>
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
                <Styled.Subtitle
                  darkText={darkText}
                  style={{ marginBottom: "15px" }}
                >
                  {desc3}
                </Styled.Subtitle>
                <Styled.BtnWrap></Styled.BtnWrap>
                <Styled.TagsWrapper>
                  {tags.map((tag) => (
                    <Styled.Tag>
                      <span style={{ color: theme.mainColor }}> &#8227; </span>
                      {tag}
                    </Styled.Tag>
                  ))}
                </Styled.TagsWrapper>
              </Styled.TextWrapper>
            </Styled.Column1>
            <Styled.Column2>
              <Styled.ImgWrap>
                <Styled.Img src={ImgData} alt={alt} />
              </Styled.ImgWrap>
            </Styled.Column2>
          </Styled.InfoRow>
        </Styled.InfoWrapper>
      </Styled.InfoContainer>
    </>
  );
};

export default About;
