import React, { useState } from "react";
import * as Styled from "./Experience.styled";
import Selector from "./Selector";

import { listOfExperiences } from "../../constants/constants";
import { Title } from "../elements/Title.styled";
import { theme } from "../../constants/theme";

const Experience = (props) => {
  const { lightBg, lightText, lightTextDesc, dark, primary, darkText, dark2 } =
    props.colorTheme;

  const [expIndx, setExpIndx] = useState(0);
  const exp = props.data[expIndx];

  return (
    <>
      <div id='experience'>
        <Title lightText={lightText}>Experience</Title>
        <Selector
          selected={expIndx}
          setSelected={setExpIndx}
          list={listOfExperiences}
        />
        <Styled.InfoContainer lightBg={lightBg}>
          <Styled.InfoWrapper>
            <Styled.TextWrapper>
              <Styled.Heading lightText={lightText}>
                {exp.title} @
                <em style={{ color: theme.mainColor }}> {exp.company} </em>
              </Styled.Heading>
              <Styled.Date>
                {exp.startDate} - {exp.endDate}
              </Styled.Date>
              {exp.desc.map((description) => (
                <Styled.Subtitle darkText={darkText}>
                  &#8227; {description}
                </Styled.Subtitle>
              ))}
            </Styled.TextWrapper>
          </Styled.InfoWrapper>
        </Styled.InfoContainer>
      </div>
    </>
  );
};

export default Experience;
