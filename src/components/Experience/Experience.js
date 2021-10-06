import React, { useState } from "react";
import * as Styled from "./Experience.styled";
import Selector from "./Selector";

import { listOfExperiences } from "../../constants/constants";
import { Title } from "../elements/Title.styled";

const Experience = (props) => {
  const { lightBg, lightText, darkText } = props.colorTheme;

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
                {exp.title} @{" "}
                <Styled.Link>
                  <a href={exp.link} target='_blank' rel='noreferrer'>
                    {exp.company}
                  </a>
                </Styled.Link>
              </Styled.Heading>
              <Styled.Date>
                {exp.startDate} - {exp.endDate}
              </Styled.Date>
              {exp.desc.map((description, index) => (
                <Styled.Subtitle darkText={darkText} key={index}>
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
