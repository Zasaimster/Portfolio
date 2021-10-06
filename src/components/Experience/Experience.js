import React, { useState } from "react";
import * as Styled from "./Experience.styled";
import Selector from "./Selector";
import Fade from "react-reveal/Fade";

import { listOfExperiences } from "../../constants/constants";
import { Title } from "../elements/Title.styled";

const Experience = (props) => {
  const { lightBg, lightText, darkText } = props.colorTheme;

  const [expIndx, setExpIndx] = useState(0);
  const exp = props.data[expIndx];

  return (
    <>
      <Styled.ExperienceContainer id='experience'>
        <Fade distance='55%' bottom>
          <Title lightText={lightText}>Experience</Title>
          <Selector
            selected={expIndx}
            setSelected={setExpIndx}
            list={listOfExperiences}
          />
        </Fade>
        <Styled.InfoContainer lightBg={lightBg}>
          <Fade distance='15%' bottom>
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
          </Fade>
        </Styled.InfoContainer>
      </Styled.ExperienceContainer>
    </>
  );
};

export default Experience;
