import React, { useState } from "react";
import * as Styled from "./Home.styled";
import Video from "../../videos/video.mp4";
import { Button } from "../elements/Button.styled";

const HeroSection = ({ data }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <Styled.HeroContainer id='home'>
      <Styled.RainParticles
        params={{
          particles: {
            number: {
              value: 250,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
      <Styled.HeroContent>
        <Styled.HeroTopline> Hi, my name is </Styled.HeroTopline>
        <Styled.HeroH1> Saim Ahmad </Styled.HeroH1>
        <Styled.HeroH2> Software Engineer </Styled.HeroH2>
        <Styled.HeroP> {data.desc1} </Styled.HeroP>
        <Styled.HeroP> {data.desc2} </Styled.HeroP>
        <Styled.HeroBtnWrapper>
          <Button
            href='mailto:Saimm.Ahmadd@gmailcom'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Let's Talk {hover ? <Styled.ArrowForward /> : <Styled.ArrowRight />}
          </Button>
        </Styled.HeroBtnWrapper>
      </Styled.HeroContent>
    </Styled.HeroContainer>
  );
};

export default HeroSection;
