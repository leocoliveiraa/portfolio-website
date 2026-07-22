import React from "react";
import styled, { keyframes } from "styled-components";
import { FiUser, FiCalendar, FiBookOpen, FiBriefcase, FiExternalLink } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";

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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

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

  & + & {
    margin-top: 1rem;
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

const CompanyName = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  font-weight: 500;
  display: inline-flex;
  margin-bottom: 0.4rem;
`;

const ExperiencePeriod = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text}70;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;


const translations = {
  en: {
    title: "About",
    subtitle: "A bit about how I work and what I use",
    about: {
      title: "How I work",
      text1:
        "I am a full-stack developer focused on building web products, internal tools, automations and apps that people can actually use. I like working close to the product, understanding the problem and shipping something that feels simple on the outside and solid underneath.",
      text2:
        "Today I work at BMD3 as the main technical person on multiple products, while also exploring ideas for my own SaaS projects.",
    },
    education: {
      title: "Education",
      university: "UNINTER",
      course: "Systems Analysis and Development",
      period: "2025-2027",
    },
    experience: {
      title: "Experience",
      currentRole: "Full-stack developer",
      currentCompany: "BMD3 · Self-employed",
      currentPeriod: "Jan 2026 - Present · 7 months",
      previousRole: "Software Developer",
      previousCompany: "Cluster",
      previousPeriod: "Oct 2025 - Jul 2026 · 10 months",
    },
  },
  pt: {
    title: "Sobre",
    subtitle: "Um pouco sobre como eu trabalho e o que eu uso",
    about: {
      title: "Como eu trabalho",
      text1:
        "Sou desenvolvedor full-stack focado em construir produtos web, ferramentas internas, automações e apps que as pessoas realmente conseguem usar. Gosto de trabalhar perto do produto, entender o problema e entregar algo simples por fora e sólido por baixo.",
      text2:
        "Hoje atuo na BMD3 como a principal pessoa técnica em múltiplos produtos, enquanto também exploro ideias para meus próprios projetos SaaS.",
    },
    education: {
      title: "Educação",
      university: "UNINTER",
      course: "Análise e Desenvolvimento de Sistemas",
      period: "2025-2027",
    },
    experience: {
      title: "Experiência",
      currentRole: "Desenvolvedor full-stack",
      currentCompany: "BMD3 · Autônomo",
      currentPeriod: "jan de 2026 - o momento · 7 meses",
      previousRole: "Desenvolvedor de Software",
      previousCompany: "Cluster",
      previousPeriod: "out de 2025 - jul de 2026 · 10 meses",
    },
  },
};

const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language];

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

        <Section>
          <SectionHeader>
            <FiBriefcase />
            <h2>{t.experience.title}</h2>
          </SectionHeader>
          <ExperienceCard>
            <CompanyLogo src="/bmd3-logo.jpg" alt="BMD3" />
            <ExperienceInfo>
              <ExperienceRole>{t.experience.currentRole}</ExperienceRole>
              <CompanyName>{t.experience.currentCompany}</CompanyName>
              <ExperiencePeriod>
                <FiCalendar />
                {t.experience.currentPeriod}
              </ExperiencePeriod>
            </ExperienceInfo>
          </ExperienceCard>
          <ExperienceCard>
            <CompanyLogo src="/cluster.jpeg" alt="Cluster" />
            <ExperienceInfo>
              <ExperienceRole>{t.experience.previousRole}</ExperienceRole>
              <CompanyLink
                href="https://soucluster.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.experience.previousCompany}
                <FiExternalLink />
              </CompanyLink>
              <ExperiencePeriod>
                <FiCalendar />
                {t.experience.previousPeriod}
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
      </Content>
    </Container>
  );
};

export default About;
