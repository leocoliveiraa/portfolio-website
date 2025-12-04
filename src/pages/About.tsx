import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiUser, FiCalendar, FiCode, FiBookOpen, FiBriefcase, FiExternalLink } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

interface AboutProps {
  language: "en" | "pt";
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const hoverFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;

const Container = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 80vh;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.text};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 968px) {
    gap: 1.5rem;
  }
`;

const Section = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 10px ${({ theme }) => theme.text}05;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.text}10;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text}70;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationCard = styled.div`
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 8px;
  padding: 1.5rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.text}08;
  }
`;

const EducationTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.text}70;
  }
`;

const EducationSubtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 0.3rem;
  font-weight: 500;
`;

const EducationPeriod = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text}70;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 8px;
  padding: 1.5rem;
  transition: background 0.2s ease;
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;

  &:hover {
    background: ${({ theme }) => theme.text}08;
  }
`;

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.text}10;
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const ExperienceRole = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.4rem;
`;

const CompanyLink = styled.a`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  margin-bottom: 0.4rem;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }

  svg {
    font-size: 0.85rem;
    opacity: 0.7;
  }
`;

const ExperiencePeriod = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text}70;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const TechStackSection = styled.div`
  grid-column: 1 / -1;

  @media (max-width: 968px) {
    grid-column: 1;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.text}08;
    transform: translateY(-3px);
    box-shadow: 0 4px 15px ${({ theme }) => theme.text}15;

    svg {
      animation: ${hoverFloat} 0.6s ease-in-out;
    }
  }

  svg {
    font-size: 2rem;
    transition: transform 0.2s ease;
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
  }

  &.html svg {
    color: #e34c26;
  }
  &.css svg {
    color: #1572b6;
  }
  &.javascript svg {
    color: #f7df1e;
  }
  &.typescript svg {
    color: #3178c6;
  }
  &.react svg {
    color: #61dafb;
  }
  &.nodejs svg {
    color: #339933;
  }
  &.mongodb svg {
    color: #47a248;
  }
  &.mysql svg {
    color: #4479a1;
  }
  &.firebase svg {
    color: #ffca28;
  }
  &.tailwind svg {
    color: #06b6d4;
  }
  &.supabase svg {
    color: #3ecf8e;
  }
  &.postgresql svg {
    color: #4169e1;
  }
`;

const translations = {
  en: {
    title: "About Me",
    subtitle: "Get to know me better",
    about: {
      title: "About",
      text1:
        "My name is Leonardo, I'm 20 years old and I'm a Full-Stack developer! I'm currently studying Systems Analysis and Development at UNINTER (International University Center).",
      text2:
        "I've been passionate about technology since I was a child, and my first contact with programming was when I was 13 years old, using Java to create Minecraft plugins. Over the years, I've deepened my knowledge in the programming world and realized that this was what I wanted for my life.",
    },
    personal: {
      title: "Personal Info",
      age: "20 years old",
      location: "Pelotas, RS",
      interests: "Technology & Gaming",
    },
    education: {
      title: "Education",
      university: "UNINTER",
      course: "Systems Analysis and Development",
      period: "2025-2027",
    },
    experience: {
      title: "Experience",
      role: "Technology Intern",
      company: "Cluster",
      period: "Oct 2025 - Present",
    },
    techStack: {
      title: "Technology Stack",
    },
    stats: {
      experience: "Years of Experience",
      projects: "Projects Completed",
      technologies: "Technologies",
      learning: "Always Learning",
    },
  },
  pt: {
    title: "Sobre Mim",
    subtitle: "Conheça um pouco mais sobre mim",
    about: {
      title: "Sobre",
      text1:
        "Me chamo Leonardo, tenho 20 anos e sou um desenvolvedor Full-Stack! Atualmente estou cursando Análise e Desenvolvimento de Sistemas na UNINTER (Centro Universitário Internacional).",
      text2:
        "Sou apaixonado por tecnologia desde criança, e meu primeiro contato com programação foi com 13 anos, utilizando a linguagem Java para criar plugins de Minecraft. Com o passar dos anos, me aprofundei no mundo da programação e percebi que era isso que queria para a minha vida.",
    },
    personal: {
      title: "Informações Pessoais",
      age: "20 anos",
      location: "Pelotas, RS",
      interests: "Tecnologia & Games",
    },
    education: {
      title: "Educação",
      university: "UNINTER",
      course: "Análise e Desenvolvimento de Sistemas",
      period: "2025-2027",
    },
    experience: {
      title: "Experiência",
      role: "Estagiário de Tecnologia",
      company: "Cluster",
      period: "Out 2025 - Presente",
    },
    techStack: {
      title: "Stack Tecnológico",
    },
    stats: {
      experience: "Anos de Experiência",
      projects: "Projetos Concluídos",
      technologies: "Tecnologias",
      learning: "Sempre Aprendendo",
    },
  },
};

const About: React.FC<AboutProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const technologies = React.useMemo(
    () => [
      { name: "HTML5", icon: SiHtml5, class: "html" },
      { name: "CSS3", icon: SiCss3, class: "css" },
      { name: "JavaScript", icon: SiJavascript, class: "javascript" },
      { name: "TypeScript", icon: SiTypescript, class: "typescript" },
      { name: "React", icon: SiReact, class: "react" },
      { name: "Node.js", icon: SiNodedotjs, class: "nodejs" },
      { name: "PostgreSQL", icon: SiPostgresql, class: "postgresql" },
      { name: "Supabase", icon: SiSupabase, class: "supabase" },
      { name: "MongoDB", icon: SiMongodb, class: "mongodb" },
      { name: "MySQL", icon: SiMysql, class: "mysql" },
      { name: "Firebase", icon: SiFirebase, class: "firebase" },
      { name: "Tailwind", icon: SiTailwindcss, class: "tailwind" },
    ],
    []
  );

  if (!isVisible) return null;

  return (
    <Container>
      <Header>
        <Title>{t.title}</Title>
        <Subtitle>{t.subtitle}</Subtitle>
      </Header>

      <Content>
        <Section>
          <SectionHeader>
            <FiUser />
            <h2>{t.about.title}</h2>
          </SectionHeader>
          <AboutText>{t.about.text1}</AboutText>
          <AboutText>{t.about.text2}</AboutText>
        </Section>

        <RightColumn>
          <Section>
            <SectionHeader>
              <FiBriefcase />
              <h2>{t.experience.title}</h2>
            </SectionHeader>
            <ExperienceCard>
              <CompanyLogo src="/cluster.jpeg" alt="Cluster" />
              <ExperienceInfo>
                <ExperienceRole>{t.experience.role}</ExperienceRole>
                <CompanyLink
                  href="https://soucluster.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.experience.company}
                  <FiExternalLink />
                </CompanyLink>
                <ExperiencePeriod>
                  <FiCalendar />
                  {t.experience.period}
                </ExperiencePeriod>
              </ExperienceInfo>
            </ExperienceCard>
          </Section>

          <Section>
            <SectionHeader>
              <FaGraduationCap />
              <h2>{t.education.title}</h2>
            </SectionHeader>
            <EducationCard>
              <EducationTitle>
                <FiBookOpen />
                {t.education.university}
              </EducationTitle>
              <EducationSubtitle>{t.education.course}</EducationSubtitle>
              <EducationPeriod>
                <FiCalendar />
                {t.education.period}
              </EducationPeriod>
            </EducationCard>
          </Section>
        </RightColumn>

        <TechStackSection>
          <Section>
            <SectionHeader>
              <FiCode />
              <h2>{t.techStack.title}</h2>
            </SectionHeader>
            <TechGrid>
              {technologies.map((tech) => (
                <TechCard key={tech.name} className={tech.class}>
                  <tech.icon />
                  <span>{tech.name}</span>
                </TechCard>
              ))}
            </TechGrid>
          </Section>
        </TechStackSection>
      </Content>
    </Container>
  );
};

export default About;
