import React from "react";
import * as Styled from "./Projects.styled";
import Fade from "react-reveal/Fade";

import { Title } from "../elements/Title.styled";
import TagCard from "./TagCard";

const Projects = (props) => {
  const { lightBg, lightText, darkText } = props.colorTheme;
  const data = props.data;

  return (
    <>
      <Styled.ProjectsContainer>
        <Styled.InfoContainer lightBg={lightBg} id='projects'>
          <Fade distance='70%' bottom>
            <Title id='projects' lightText={lightText}>
              Projects
            </Title>
          </Fade>
          {data.map((project, index) => (
            <Styled.InfoWrapper key={index}>
              <Fade distance='10%' bottom>
                <Styled.InfoRow imgStart={project.imgStart}>
                  <Styled.Column1>
                    <Styled.TextWrapper>
                      <Styled.TopLine>{project.name}</Styled.TopLine>
                      <Styled.Subtitle darkText={darkText}>
                        {project.desc}
                      </Styled.Subtitle>
                      <TagCard tags={project.tags} />
                      <Styled.LinksWrapper imgStart={project.imgStart}>
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <Styled.GhLink />
                        </a>
                        <a
                          href={project.website}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <Styled.WebsiteLink>
                            {project.website}
                          </Styled.WebsiteLink>
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
              </Fade>
            </Styled.InfoWrapper>
          ))}
        </Styled.InfoContainer>
      </Styled.ProjectsContainer>
    </>
  );
};

export default Projects;
