import React from "react";
import * as Styled from "./Projects.styled";
import { Button } from "../elements/Button.styled";

import ImgData from "../../images/about.svg";
import { Title } from "../elements/Title.styled";
import TagCard from "./TagCard";

const Projects = (props) => {
  console.log(props);
  const { lightBg, lightText, lightTextDesc, dark, primary, darkText, dark2 } =
    props.colorTheme;
  // const {
  //   name,
  //   desc,
  //   tags,
  //   github,
  //   website,
  //   image,
  //   alt,
  //   imgStart
  // } = props.data;
  const data = props.data;

  return (
    <>
      <Styled.InfoContainer lightBg={lightBg} id='projects'>
        <Title id='projects' lightText={lightText}>
          Projects
        </Title>
        {data.map((project) => (
          <Styled.InfoWrapper>
            <Styled.InfoRow imgStart={project.imgStart}>
              <Styled.Column1>
                <Styled.TextWrapper>
                  <Styled.TopLine>{project.name}</Styled.TopLine>
                  <Styled.Subtitle darkText={darkText}>
                    {project.desc}
                  </Styled.Subtitle>
                  <TagCard tags={project.tags} />
                  <Styled.LinksWrapper imgStart={project.imgStart}>
                    <a href={project.github} target='_blank' rel='noreferrer'>
                      <Styled.GhLink />
                    </a>
                    <a href={project.website} target='_blank' rel='noreferrer'>
                      <Styled.WebsiteLink>{project.website}</Styled.WebsiteLink>
                    </a>
                  </Styled.LinksWrapper>
                </Styled.TextWrapper>
              </Styled.Column1>
              <Styled.Column2>
                <Styled.ImgWrap>
                  <Styled.Img src={project.image} alt='' />
                </Styled.ImgWrap>
              </Styled.Column2>
            </Styled.InfoRow>
          </Styled.InfoWrapper>
        ))}
      </Styled.InfoContainer>
    </>
  );
};

export default Projects;
