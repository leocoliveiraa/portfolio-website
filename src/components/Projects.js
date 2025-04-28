import React from "react";
import styled from "styled-components";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import notedz from "../assets/notedz.png";
import cz from "../assets/cz.png";

const Div = styled.div`
  margin: 5vh auto;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: rgb(113, 103, 255);
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111;
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(113, 103, 255, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid rgb(113, 103, 255);
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 15px;
  color: rgb(113, 103, 255);
`;

const ProjectInfo = styled.div`
  margin-top: 10px;
`;

const ProjectYear = styled.p`
  color: rgb(197, 197, 197);
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: rgb(197, 197, 197);
  margin-bottom: 15px;
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const TechTag = styled.span`
  background-color: rgba(113, 103, 255, 0.15);
  color: rgb(113, 103, 255);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LinkButton = styled.a`
  color: rgb(113, 103, 255);
  padding: 8px 16px;
  border: 1px solid rgb(113, 103, 255);
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: fit-content;

  &:hover {
    background-color: rgb(113, 103, 255);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
    margin: 0 auto;
    justify-content: center;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
const Projects = () => {
  return (
    <Div id="projects">
      <Title>Projetos</Title>
      <ProjectList>
        <Project>
          <ProjectTitle>Notedz</ProjectTitle>
          <ProjectYear>2024</ProjectYear>
          <Image src={notedz} alt="Notedz" />
          <ProjectInfo>
            <ProjectDescription>
              Uma aplicação para escrever e notar tudo o que voce quiser.
            </ProjectDescription>
            <TechStack>
              <TechTag>React JS</TechTag>
              <TechTag>Styled Components</TechTag>
            </TechStack>
            <Links>
              <LinkButton
                href="https://github.com/leoz11/notedz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repositório GitHub do Notedz"
              >
                <Icon>
                  <FaGithub />
                </Icon>
                Repositório
              </LinkButton>
              <LinkButton
                href="https://notedz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site do Notedz"
              >
                <Icon>
                  <FaExternalLinkAlt />
                </Icon>
                Visitar
              </LinkButton>
            </Links>
          </ProjectInfo>
        </Project>
        <Project>
          <ProjectTitle>Commitz</ProjectTitle>
          <ProjectYear>2024</ProjectYear>
          <Image src={cz} alt="Commitz" />
          <ProjectInfo>
            <ProjectDescription>
              Uma aplicação para você salvar suas metas anuais, controla-las e
              acompanhar o progresso do ano.
            </ProjectDescription>
            <TechStack>
              <TechTag>React JS</TechTag>
              <TechTag>Tailwind CSS</TechTag>
            </TechStack>
            <Links>
              <LinkButton
                href="https://github.com/leoz11/Commitz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repositório GitHub do Commitz"
              >
                <Icon>
                  <FaGithub />
                </Icon>
                Repositório
              </LinkButton>
              <LinkButton
                href="https://commitzz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site do Commitz"
              >
                <Icon>
                  <FaExternalLinkAlt />
                </Icon>
                Visitar
              </LinkButton>
            </Links>
          </ProjectInfo>
        </Project>
      </ProjectList>
    </Div>
  );
};

export default Projects;
