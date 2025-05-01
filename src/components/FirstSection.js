import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

import img from "../assets/foto.jpeg";

const Div = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Imagem = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
  border: 5px solid rgb(113, 103, 255);
  object-fit: cover;
`;

const Title = styled.h1`
  color: rgb(113, 103, 255);
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: rgb(197, 197, 197);
`;

const SocialMedia = styled.div`
  gap: 0.2em;
  display: flex;
  margin-top: 10px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  font-size: 32px;
  display: flex;
  padding: 8px;
  color: rgb(197, 197, 197);
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.3s;
  }
`;

const Email = styled.a`
  color: rgb(113, 103, 255);
  cursor: pointer;
`;

const Nav = styled.div`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  color: rgb(197, 197, 197);
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const ArrowIcon = styled.span`
  margin-right: 10px;
  color: rgb(113, 103, 255);
`;

const Subcontent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CopiedMessage = styled.p`
  color: rgb(113, 103, 255);
  border-radius: 3px;
  width: 20vh;
  font-size: 16px;
  margin-top: 10px;
`;

const MyCV = styled.a`
  margin-top: 10px;
  color: rgb(113, 103, 255);
  width: fit-content;
  padding: 8px 16px;
  border: 1px solid rgb(113, 103, 255);
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgb(113, 103, 255);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
    margin: 20px auto 0 auto;
    display: flex;
    justify-content: center;
  }
`;

const IconDownload = styled.span`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const FirstSection = ({ isMobile }) => {
  const [copied, setCopied] = useState(false);

  const copiarEmail = () => {
    const email = "leo11.contato@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 5000);
      })
      .catch((err) => {
        console.error("Erro ao copiar o email:", err);
      });
  };

  return (
    <Div>
      <Imagem src={img} alt="Foto de perfil" />
      <Title>Leonardo</Title>
      <Subtitle>Desenvolvedor Full-stack</Subtitle>
      <SocialMedia>
        <SocialLink
          href="https://x.com/leleojs_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter/X"
        >
          <FaXTwitter />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/leo1oliveira/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://github.com/leoz11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://instagram.com/leobtwz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialLink>
      </SocialMedia>
      <Nav isMobile={isMobile}>
        <NavLink href="#about">
          <ArrowIcon>↗</ArrowIcon>
          Sobre mim
        </NavLink>
        <NavLink href="#education">
          <ArrowIcon>↗</ArrowIcon>
          Formação acadêmica
        </NavLink>
        <NavLink href="#projects">
          <ArrowIcon>↗</ArrowIcon>
          Projetos
        </NavLink>
        <NavLink href="#stack">
          <ArrowIcon>↗</ArrowIcon>
          Stack
        </NavLink>
      </Nav>
      <Subcontent>
        <Email onClick={copiarEmail}>leo11.contato@gmail.com</Email>
        {copied && <CopiedMessage>Email copiado!</CopiedMessage>}

        <MyCV
          href="https://drive.google.com/file/d/1p2bKzdhs_9WNB_KCxUeh5Ii6Iko1i0xR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDownload>
            <MdOutlineFileDownload />
          </IconDownload>
          Baixe meu CV
        </MyCV>
      </Subcontent>
    </Div>
  );
};

export default FirstSection;
