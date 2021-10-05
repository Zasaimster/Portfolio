import React from "react";
import * as Styled from "./Services.styled";
import Icon1 from "../../images/about.svg";

const Services = () => {
  return (
    <Styled.ServicesContainer id='services'>
      <Styled.ServicesH1> services lol</Styled.ServicesH1>
      <Styled.ServicesWrapper>
        <Styled.ServicesCard>
          <Styled.ServicesIcon src={Icon1} />
          <Styled.ServicesH2> reduce expense </Styled.ServicesH2>
          <Styled.ServicesP> blah blah </Styled.ServicesP>
        </Styled.ServicesCard>
        <Styled.ServicesCard>
          <Styled.ServicesIcon src={Icon1} />
          <Styled.ServicesH2> reduce expense </Styled.ServicesH2>
          <Styled.ServicesP> blah blah </Styled.ServicesP>
        </Styled.ServicesCard>
        <Styled.ServicesCard>
          <Styled.ServicesIcon src={Icon1} />
          <Styled.ServicesH2> reduce expense </Styled.ServicesH2>
          <Styled.ServicesP> blah blah </Styled.ServicesP>
        </Styled.ServicesCard>
      </Styled.ServicesWrapper>
    </Styled.ServicesContainer>
  );
};

export default Services;
