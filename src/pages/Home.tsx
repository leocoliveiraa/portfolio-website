import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiArrowRight,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiYoutube,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  language: "en" | "pt";
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  min-height: 75vh;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 70vh;
  }
`;

const Header = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
`;

const Description = styled.p`
  font-size: 1.15rem;
  max-width: 650px;
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
  }
`;

const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
  max-width: 650px;
  align-items: center;
`;

const PrimaryActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.8rem;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 14px ${({ theme }) => theme.text}25;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px ${({ theme }) => theme.text}35;

    &::before {
      left: 100%;
    }

    svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.3s ease;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.8rem;
  border: 1.5px solid ${({ theme }) => theme.text}30;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.text}05;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.text}10;
    border-radius: 14px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.text}50;
    transform: translateY(-3px);
    box-shadow: 0 8px 22px ${({ theme }) => theme.text}20;

    &::before {
      opacity: 1;
    }

    svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.3s ease;
    z-index: 1;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const SocialLabel = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  font-weight: 500;
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.text}06;
    border: 1px solid ${({ theme }) => theme.text}12;
    border-radius: 14px;
    transition: all 0.3s ease;
    opacity: 0.8;
    position: relative;
    overflow: hidden;
    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        transparent,
        ${({ theme }) => theme.text}10,
        transparent
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &[href*="github.com"] {
      &:hover {
        background: rgba(139, 92, 246, 0.1);
        border-color: rgba(139, 92, 246, 0.3);
        color: #8b5cf6;
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &[href*="linkedin.com"] {
      &:hover {
        background: rgba(0, 119, 181, 0.1);
        border-color: rgba(0, 119, 181, 0.3);
        color: #0077b5;
        box-shadow: 0 8px 25px rgba(0, 119, 181, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &[href*="youtube.com"] {
      &:hover {
        background: rgba(255, 0, 0, 0.1);
        border-color: rgba(255, 0, 0, 0.3);
        color: #ff0000;
        box-shadow: 0 8px 25px rgba(255, 0, 0, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &[href*="instagram.com"] {
      &:hover {
        background: linear-gradient(
          45deg,
          rgba(225, 48, 108, 0.1),
          rgba(255, 101, 48, 0.1)
        );
        border-color: rgba(225, 48, 108, 0.3);
        color: #e1306c;
        box-shadow: 0 8px 25px rgba(225, 48, 108, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &[href*="twitter.com"] {
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        border-color: rgba(0, 0, 0, 0.3);
        color: #000;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &:hover {
      opacity: 1;

      &::before {
        opacity: 1;
      }
    }
  }
`;

const Highlight = styled.span`
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.text}18 0%,
    ${({ theme }) => theme.text}10 100%
  );
  padding: 0.05rem 0.4rem;
  border-radius: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text}15;
  position: relative;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.text}20;
  }
`;

const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.2rem;
  background: ${({ theme }) => theme.text}06;
  border: 1px solid ${({ theme }) => theme.text}15;
  border-radius: 24px;
  backdrop-filter: blur(12px);
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  font-weight: 500;

  .status-dot {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
`;

const translations = {
  en: {
    status: "Available for new projects",
    description: {
      text: "Specialized in building modern web applications with",
      react: "React",
      typescript: "TypeScript",
      nodejs: "Node.js",
    },
    buttons: {
      viewProjects: "View Projects",
      contact: "Contact me",
      downloadCV: "Download CV",
    },
    social: {
      connect: "Let's connect",
    },
  },
  pt: {
    status: "Disponível para novos projetos",
    description: {
      text: "Especializado em construir aplicações web modernas com",
      react: "React",
      typescript: "TypeScript",
      nodejs: "Node.js",
    },
    buttons: {
      viewProjects: "Ver Projetos",
      contact: "Contate-me",
      downloadCV: "Baixar CV",
    },
    social: {
      connect: "Vamos nos conectar",
    },
  },
};

const Home: React.FC<HomeProps> = ({ language }) => {
  const navigate = useNavigate();
  const t = translations[language];
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1T1llhBzoxHZGNYfqE_oulvJDF5dIVso4/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Container>
      <Header>
        <StatusIndicator>
          <div className="status-dot" />
          <span>{t.status}</span>
        </StatusIndicator>
      </Header>

      <Description>
        {t.description.text} <Highlight>{t.description.typescript}</Highlight>
        , <Highlight>{t.description.react}</Highlight>{" "}
        {language === "en" ? "and" : "e"}{" "}
        <Highlight>{t.description.nodejs}</Highlight>.
      </Description>

      <ActionsSection>
        <PrimaryActions>
          <PrimaryButton onClick={() => navigate("/projects")}>
            <FiCode />
            {t.buttons.viewProjects}
            <FiArrowRight />
          </PrimaryButton>

          <SecondaryButton onClick={handleContactClick}>
            {t.buttons.contact}
            <FiArrowRight />
          </SecondaryButton>

          <SecondaryButton onClick={handleDownloadCV}>
            <FiDownload />
            {t.buttons.downloadCV}
            <FiExternalLink />
          </SecondaryButton>
        </PrimaryActions>

        <SocialSection>
          <SocialLabel>{t.social.connect}</SocialLabel>
          <SocialIcons>
            <a
              href="https://github.com/leocoliveiraa"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/leocoliveira"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@leodev_"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <FiYoutube />
            </a>
            <a
              href="https://twitter.com/leocoliveira"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/leobtwz"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FiInstagram />
            </a>
          </SocialIcons>
        </SocialSection>
      </ActionsSection>
    </Container>
  );
};

export default Home;
