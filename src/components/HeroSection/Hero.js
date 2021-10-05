import React, { useState } from "react";
import * as Styled from "./Hero.styled";
import Video from "../../videos/video.mp4";
import { Button } from "../elements/Button.styled";

const HeroSection = ({ data }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <Styled.HeroContainer id='home'>
      <Styled.HeroBg>
        <Styled.VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Styled.HeroBg>
      <Styled.HeroContent>
        <Styled.HeroTopline> Hi, my name is </Styled.HeroTopline>
        <Styled.HeroH1> Saim Ahmad </Styled.HeroH1>
        <Styled.HeroH2> Software Engineer </Styled.HeroH2>
        <Styled.HeroP> {data.desc1} </Styled.HeroP>
        <Styled.HeroP> {data.desc2} </Styled.HeroP>
        <Styled.HeroBtnWrapper>
          <Button
            to='resume'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Resume {hover ? <Styled.ArrowForward /> : <Styled.ArrowRight />}
          </Button>
        </Styled.HeroBtnWrapper>
      </Styled.HeroContent>
    </Styled.HeroContainer>
  );
};

export default HeroSection;
