import React from "react";
import * as Styled from "./About.styled";
import { theme } from "../../constants/theme";
import Fade from "react-reveal/Fade";

import ImgData from "../../images/headshot.jpg";

const About = (props) => {
  const { lightBg, darkText } = props.colorTheme;
  const { imgStart, smallHeader, desc1, desc2, desc3, alt, tags } = props.data;

  return (
    <>
      <Styled.InfoContainer lightBg={lightBg} id='about'>
        <Fade distance='15%' bottom>
          <Styled.InfoWrapper>
            <Styled.InfoRow imgStart={imgStart}>
              <Styled.Column1>
                <Styled.TextWrapper>
                  <Styled.TopLine>{smallHeader}</Styled.TopLine>
                  <Styled.Subtitle darkText={darkText}>{desc1}</Styled.Subtitle>
                  <Styled.Subtitle darkText={darkText}>{desc2}</Styled.Subtitle>
                  <Styled.Subtitle
                    darkText={darkText}
                    style={{ marginBottom: "15px" }}
                  >
                    {desc3}
                  </Styled.Subtitle>
                  <Styled.TagsWrapper>
                    {tags.map((tag, index) => (
                      <Styled.Tag key={index}>
                        <span style={{ color: theme.mainColor }}>&#8227;</span>
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
        </Fade>
      </Styled.InfoContainer>
    </>
  );
};

export default About;
