import React, { useState } from "react";
import * as Styled from "./Home.styled";
import { Button } from "../elements/Button.styled";

const HeroSection = ({ data }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <Styled.Container id='home'>
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
      <Styled.Content>
        <Styled.Topline> Hi, my name is </Styled.Topline>
        <Styled.H1> Saim Ahmad </Styled.H1>
        <Styled.H2> Software Engineer </Styled.H2>
        <Styled.P> {data.desc1} </Styled.P>
        <Styled.P> {data.desc2} </Styled.P>
        <Styled.BtnWrap>
          <Button
            href='mailto:Saimm.Ahmadd@gmailcom'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Let's Talk {hover ? <Styled.ArrowForward /> : <Styled.ArrowRight />}
          </Button>
        </Styled.BtnWrap>
      </Styled.Content>
    </Styled.Container>
  );
};

export default HeroSection;
