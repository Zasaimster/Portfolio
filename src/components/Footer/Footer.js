import React from "react";
import * as Styled from "./Footer.styled";

const Footer = () => {
  return (
    <>
      <Styled.FooterContainer>
        <Styled.LinkContainer>
          <Styled.FooterLinkedIn />
          <Styled.FooterGithub />
          <Styled.FooterEmail />
        </Styled.LinkContainer>
        <Styled.FooterText>Built by Saim Ahmad</Styled.FooterText>
      </Styled.FooterContainer>
    </>
  );
};

export default Footer;
