import React from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaDatabase,
  FaFireAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const Div = styled.div`
  font-family: "Inter", sans-serif;
  margin-top: 5vh;
  width: 100%;
`;

const SectionTitle = styled.h2`
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

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;

  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem 1rem;
  }
`;

const StackItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border: 2px solid rgb(113, 103, 255);
  border-radius: 0.5rem;
  background-color: transparent;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Stack = () => {
  const technologies = [
    { icon: <FaHtml5 color="#E34F26" title="HTML5" /> },
    { icon: <FaCss3Alt color="#1572B6" title="CSS3" /> },
    { icon: <FaJs color="#F7DF1E" title="JavaScript" /> },
    { icon: <FaReact color="#61DAFB" title="React" /> },
    { icon: <FaNodeJs color="#339933" title="Node.js" /> },
    { icon: <SiTailwindcss color="#06B6D4" title="Tailwind CSS" /> },
    { icon: <FaBootstrap color="#7952B3" title="Bootstrap" /> },
    { icon: <TbBrandCSharp color="#239120" title="C#" /> },
    { icon: <FaJava color="#007396" title="Java" /> },
    { icon: <FaDatabase color="#336791" title="Database" /> },
    { icon: <SiMongodb color="#47A248" title="MongoDB" /> },
    { icon: <FaFireAlt color="#FFCA28" title="Firebase" /> },
  ];

  return (
    <Div id="stack">
      <SectionTitle>Stack</SectionTitle>
      <StackGrid>
        {technologies.map((tech, index) => (
          <StackItem key={index}>
            <IconWrapper>{tech.icon}</IconWrapper>
          </StackItem>
        ))}
      </StackGrid>
    </Div>
  );
};

export default Stack;
