import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  id: "about";

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

const About = styled.p`
  color: rgb(197, 197, 197);
  width: 100%;
  max-width: 600px;
`;

const AboutSection = () => {
  return (
    <div id="about">
      <SectionTitle>Sobre mim</SectionTitle>
      <About>
        Me chamo Leonardo, tenho 20 anos e sou um desenvolvedor Full-Stack!
        Atualmente estou cursando Análise e Desenvolvimento de Sistemas na
        UNINTER (Centro Universitário Internacional).
        <br />
        <br />
        Sou apaixonado por tecnologia desde criança, e meu primeiro contato com
        programação foi com 13 anos, utilizando a linguagem Java para criar
        plugins de minecraft. Com o passar dos anos, me aprofundei no mundo da
        programação e percebi que era isso que queria para a minha vida.
        <br />
        <br />
        Atualmente utilizo as tecnologias que você encontra em meu perfil.
      </About>
    </div>
  );
};

export default AboutSection;
