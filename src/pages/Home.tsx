import React from "react";
import styled, { keyframes } from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import {
  SiCloudflare,
  SiDocker,
  SiExpo,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

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

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8.4rem 2rem 4rem;
  min-height: auto;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 7.25rem 1rem 3.25rem;
  }
`;

const Eyebrow = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.62;
  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.9rem;
  letter-spacing: 0;
`;

const Description = styled.p`
  font-size: 0.95rem;
  max-width: 560px;
  color: ${({ theme }) => theme.text};
  line-height: 1.7;
  margin-bottom: 1.65rem;
  opacity: 0.78;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
  }
`;

const HeroTitle = styled.h1`
  max-width: 700px;
  font-size: clamp(2rem, 4.6vw, 3.55rem);
  line-height: 1.1;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const TechCarousel = styled.div`
  width: 100%;
  max-width: 700px;
  overflow: hidden;
  margin-bottom: 2rem;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`;

const TechTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: max-content;
  animation: ${marquee} 28s linear infinite;
`;

const TechItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.text}12;
  border-radius: 999px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.text}05;
  white-space: nowrap;

  svg {
    font-size: 0.95rem;
    color: var(--tech-color);
  }

  span {
    font-size: 0.78rem;
    opacity: 0.86;
    font-weight: 500;
  }
`;

const ActionsSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 780px;
  align-items: center;
  justify-content: center;
`;

const PrimaryActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 14px;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 14px ${({ theme }) => theme.text}25;
  cursor: pointer;
  white-space: nowrap;

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
  padding: 0.8rem 1.2rem;
  border: 1.5px solid ${({ theme }) => theme.text}30;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.text}05;
  border-radius: 14px;
  font-size: 0.86rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);
  cursor: pointer;
  white-space: nowrap;

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

const translations = {
  en: {
    eyebrow: "Full-stack developer · Pelotas/RS",
    title: "I build digital products for real use.",
    description: {
      text: "Web, mobile, SaaS and automations with clear interfaces and practical delivery.",
    },
    buttons: {
      viewProjects: "View Projects",
      contact: "Get in Touch",
    },
  },
  pt: {
    eyebrow: "Desenvolvedor full-stack · Pelotas/RS",
    title: "Desenvolvo produtos digitais para uso real.",
    description: {
      text: "Web, mobile, SaaS e automações com interface clara e entrega prática.",
    },
    buttons: {
      viewProjects: "Ver projetos",
      contact: "Entrar em contato",
    },
  },
};

const stackItems = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#f1f1f1" },
  { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Prisma", icon: SiPrisma, color: "#5a67d8" },
  { name: "Expo", icon: SiExpo, color: "#f1f1f1" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#f38020" },
  { name: "Stripe", icon: SiStripe, color: "#635bff" },
];

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Eyebrow>{t.eyebrow}</Eyebrow>

      <HeroTitle>{t.title}</HeroTitle>

      <Description>{t.description.text}</Description>

      <TechCarousel aria-label="Stack">
        <TechTrack>
          {[...stackItems, ...stackItems].map((item, index) => {
            const Icon = item.icon;
            return (
              <TechItem
                key={`${item.name}-${index}`}
                style={{ "--tech-color": item.color } as React.CSSProperties}
              >
                <Icon />
                <span>{item.name}</span>
              </TechItem>
            );
          })}
        </TechTrack>
      </TechCarousel>

      <ActionsSection>
        <PrimaryActions>
          <PrimaryButton onClick={() => scrollToSection("projects")}>
            {t.buttons.viewProjects}
            <FiArrowRight />
          </PrimaryButton>

          <SecondaryButton onClick={() => scrollToSection("contact")}>
            {t.buttons.contact}
            <FiArrowRight />
          </SecondaryButton>
        </PrimaryActions>
      </ActionsSection>
    </Container>
  );
};

export default Home;
