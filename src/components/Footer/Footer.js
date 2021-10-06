import React from "react";
import * as Styled from "./Footer.styled";
import { ColorWrapper } from "../elements/ColorWrapper";

const Footer = () => {
  return (
    <>
      <Styled.FooterContainer>
        <Styled.FooterWrapper>
          <Styled.LinkContainer>
            <a
              href='https://www.linkedin.com/in/saim-ahmad-3708481a6/'
              target='_blank'
              rel='noreferrer'
            >
              <Styled.FooterLinkedIn />
            </a>
            <a
              href='https://github.com/Zasaimster'
              target='_blank'
              rel='noreferrer'
            >
              <Styled.FooterGithub />
            </a>
            <a href='mailto:Saimm.Ahmadd@gmail.com'>
              <Styled.FooterEmail />
            </a>
          </Styled.LinkContainer>
          <Styled.FooterText>Built by Saim Ahmad</Styled.FooterText>
        </Styled.FooterWrapper>
      </Styled.FooterContainer>
    </>
  );
};

export default Footer;
