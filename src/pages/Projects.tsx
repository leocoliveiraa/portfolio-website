import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FiGithub,
  FiCalendar,
  FiCode,
  FiArrowRight,
  FiFolder,
} from "react-icons/fi";

interface ProjectsProps {
  language: "en" | "pt";
}

interface Project {
  id: string;
  title: string;
  year: string;
  description: {
    en: string;
    pt: string;
  };
  technologies: string[];
  repositoryUrl: string;
  demoUrl: string;
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

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const Container = styled.section`
  padding: 4rem 2rem;
  max-width: 720px;
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

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 10px ${({ theme }) => theme.text}05;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.text}10;

    .project-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .project-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
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

const ProjectYear = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}70;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechnologiesSection = styled.div`
  margin-bottom: 1.5rem;
`;

const TechnologiesLabel = styled.h4`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  margin-bottom: 0.8rem;
  font-weight: 500;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechnologyTag = styled.span`
  background: ${({ theme }) => theme.text}10;
  color: ${({ theme }) => theme.text};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.text}15;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.text}15;
    transform: translateY(-1px);
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.8rem;
  opacity: 0.7;
  transform: translateY(5px);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.text}25;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.text}05;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.text}10;
    border-color: ${({ theme }) => theme.text}40;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.text}15;

    svg {
      transform: translateX(2px);
    }
  }

  svg {
    font-size: 1rem;
    transition: transform 0.2s ease;
  }

  &.primary {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.text};

    &:hover {
      background: ${({ theme }) => theme.text}90;
      box-shadow: 0 4px 12px ${({ theme }) => theme.text}30;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;

  svg {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const LoadingCard = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 16px;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const LoadingElement = styled.div`
  background: ${({ theme }) => theme.text}10;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: 1rem;

  &.title {
    height: 24px;
    width: 60%;
    margin-bottom: 0.5rem;
  }

  &.year {
    height: 16px;
    width: 30%;
    margin-bottom: 1.5rem;
  }

  &.description {
    height: 16px;
    width: 100%;
    margin-bottom: 0.5rem;

    &:last-of-type {
      width: 80%;
      margin-bottom: 1.5rem;
    }
  }

  &.tech {
    height: 24px;
    width: 80px;
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  &.actions {
    height: 36px;
    width: 100px;
    display: inline-block;
    margin-right: 0.8rem;
    margin-top: 1rem;
  }
`;

const projects: Project[] = [
  {
    id: "VaultMapz",
    title: "VaultMapz",
    year: "2025",
    description: {
      pt: "Gerencie suas finanças de forma prática — acompanhe receitas, despesas e saldo em um dashboard interativo, com autenticação, dark/light mode e design responsivo.",
      en: "Manage your finances in a practical way — track income, expenses and balance on an interactive dashboard, with authentication, dark/light mode and responsive design.",
    },
    technologies: [
      "React",
      "Typescript",
      "Vite",
      "Firebase",
      "Styled Components",
      "Recharts",
    ],
    repositoryUrl: "https://github.com/leocoliveiraa/vaultmapz",
    demoUrl: "https://vaultmapz.vercel.app",
  },
  {
    id: "LariStudio",
    title: "LariStudio Portfólio",
    year: "2025",
    description: {
      pt: "Um site portfólio criado para a LariStudio! Uma designer gráfica para marcas alternativas, fofas & autênticas.",
      en: "A website portfolio created for LariStudio! A graphic designer for alternative, cute and authentic brands.",
    },
    technologies: [
      "React JS",
      "Typescript",
      "Vite",
      "Styled Components",
      "Vercel",
      "Hostinger",
    ],
    repositoryUrl: "https://github.com/leocoliveiraa/laristudio",
    demoUrl: "https://laristudio.com",
  },
  {
    id: "notedz",
    title: "Notedz",
    year: "2024",
    description: {
      pt: "Uma aplicação para escrever e anotar tudo o que você quiser! Desde receitas, até ideias, histórias ou roteiros!",
      en: "An application to write and note everything you want! From recipes to ideas, stories or scripts!",
    },
    technologies: ["React JS", "Styled Components", "Quill", "Local Storage"],
    repositoryUrl: "https://github.com/leocoliveiraa/notedz",
    demoUrl: "https://notedz.vercel.app",
  },
  {
    id: "commitz",
    title: "Commitz",
    year: "2024",
    description: {
      pt: "Uma aplicação para você salvar suas metas anuais, controlá-las e acompanhar o progresso do ano.",
      en: "An application for you to save your annual goals, control them and track your year's progress.",
    },
    technologies: ["React JS", "Tailwind CSS"],
    repositoryUrl: "https://github.com/leocoliveiraa/commitz",
    demoUrl: "https://commitzz.vercel.app",
  },
];

const translations = {
  en: {
    title: "Projects",
    subtitle: "Some of the projects I've worked on",
    technologies: "Technologies",
    repository: "Repository",
    visit: "Visit",
    noProjects: {
      title: "No projects yet",
      description: "New projects coming soon!",
    },
  },
  pt: {
    title: "Projetos",
    subtitle: "Alguns dos projetos que desenvolvi",
    technologies: "Tecnologias",
    repository: "Repositório",
    visit: "Visitar",
    noProjects: {
      title: "Nenhum projeto ainda",
      description: "Novos projetos em breve!",
    },
  },
};

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setVisibleProjects(projects);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const LoadingProjectCard = React.useMemo(
    () => (
      <LoadingCard>
        <LoadingElement className="title" />
        <LoadingElement className="year" />
        <LoadingElement className="description" />
        <LoadingElement className="description" />
        <LoadingElement className="tech" />
        <LoadingElement className="tech" />
        <LoadingElement className="tech" />
        <LoadingElement className="actions" />
        <LoadingElement className="actions" />
      </LoadingCard>
    ),
    []
  );

  return (
    <Container>
      <Header>
        <Title>{t.title}</Title>
        <Subtitle>{t.subtitle}</Subtitle>
      </Header>

      {isLoading ? (
        <ProjectsList>
          {[1, 2].map((item) => (
            <React.Fragment key={item}>{LoadingProjectCard}</React.Fragment>
          ))}
        </ProjectsList>
      ) : visibleProjects.length === 0 ? (
        <EmptyState>
          <FiFolder />
          <h3>{t.noProjects.title}</h3>
          <p>{t.noProjects.description}</p>
        </EmptyState>
      ) : (
        <ProjectsList>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectHeader>
                <ProjectInfo>
                  <ProjectTitle>
                    <FiCode />
                    {project.title}
                  </ProjectTitle>
                  <ProjectYear>
                    <FiCalendar />
                    {project.year}
                  </ProjectYear>
                </ProjectInfo>
              </ProjectHeader>

              <ProjectDescription>
                {project.description[language]}
              </ProjectDescription>

              <TechnologiesSection>
                <TechnologiesLabel>{t.technologies}</TechnologiesLabel>
                <TechnologiesList>
                  {project.technologies.map((tech, techIndex) => (
                    <TechnologyTag key={techIndex}>{tech}</TechnologyTag>
                  ))}
                </TechnologiesList>
              </TechnologiesSection>

              <ProjectActions className="project-actions">
                <ActionButton
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                  {t.repository}
                </ActionButton>

                <ActionButton
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                >
                  {t.visit}
                  <FiArrowRight />
                </ActionButton>
              </ProjectActions>
            </ProjectCard>
          ))}
        </ProjectsList>
      )}
    </Container>
  );
};

export default Projects;

