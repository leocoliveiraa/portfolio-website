import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FiGithub,
  FiExternalLink,
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
  image: string;
  featured?: boolean;
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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Container = styled.section`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 80vh;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;


const ProjectCard = styled.div<{ $featured?: boolean }>`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}12;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  ${({ $featured }) =>
    $featured &&
    `
    grid-column: span 2;
    
    @media (max-width: 900px) {
      grid-column: span 1;
    }
  `}

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.text}15;
    border-color: ${({ theme }) => theme.text}25;

    .project-image {
      transform: scale(1.03);
    }

    .project-overlay {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: ${({ theme }) => theme.text}08;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.background}10 50%,
    ${({ theme }) => theme.background}90 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
  gap: 0.8rem;
`;

const OverlayButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px ${({ theme }) => theme.text}20;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 16px ${({ theme }) => theme.text}30;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const ProjectYear = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  font-weight: 500;
  background: ${({ theme }) => theme.text}08;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const TechnologyTag = styled.span`
  background: ${({ theme }) => theme.text}08;
  color: ${({ theme }) => theme.text};
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.text}10;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.text}12;
    transform: translateY(-1px);
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.1rem;
  border: 1px solid ${({ theme }) => theme.text}20;
  color: ${({ theme }) => theme.text};
  background: transparent;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  flex: 1;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.text}08;
    border-color: ${({ theme }) => theme.text}35;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
  }

  &.primary {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.text};

    &:hover {
      opacity: 0.9;
      box-shadow: 0 4px 12px ${({ theme }) => theme.text}30;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  grid-column: span 2;

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
  border-radius: 20px;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;
`;

const LoadingImage = styled.div`
  width: 100%;
  height: 220px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.text}08 25%,
    ${({ theme }) => theme.text}15 50%,
    ${({ theme }) => theme.text}08 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const LoadingContent = styled.div`
  padding: 1.5rem;
`;

const LoadingElement = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.text}08 25%,
    ${({ theme }) => theme.text}15 50%,
    ${({ theme }) => theme.text}08 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  &.title {
    height: 24px;
    width: 60%;
  }

  &.description {
    height: 14px;
    width: 100%;

    &:nth-child(3) {
      width: 80%;
    }
  }

  &.tech {
    height: 28px;
    width: 70px;
    display: inline-block;
    margin-right: 0.5rem;
    border-radius: 8px;
  }

  &.button {
    height: 40px;
    width: 48%;
    display: inline-block;
    margin-right: 4%;
    border-radius: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;


const projects: Project[] = [
  {
    id: "piwicode",
    title: "PiwiCode",
    year: "2025",
    description: {
      pt: "Uma plataforma comunidade para pessoas aprenderem programação, com desafios de código, aulas, conteúdos, gamificação e muito mais.",
      en: "A community platform for people to learn programming, with code challenges, lessons, content, gamification and much more.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    repositoryUrl: "https://github.com/leocoliveiraa",
    demoUrl: "https://piwicode.com",
    image: "/piwicode.png",
  },
  {
    id: "pdfusion",
    title: "PDFusion",
    year: "2025",
    description: {
      pt: "Um site que utiliza IA para gerar resumos inteligentes do seu PDF. Faça upload e obtenha insights instantâneos.",
      en: "A website that uses AI to generate smart summaries of your PDF. Upload and get instant insights.",
    },
    technologies: ["TypeScript", "Node.js", "Express", "Groq AI", "Llama 3.3"],
    repositoryUrl: "https://github.com/leocoliveiraa/pdfusion",
    demoUrl: "https://thepdfusion.vercel.app",
    image: "/pdfusion.png",
  },
  {
    id: "VaultMapz",
    title: "VaultMapz",
    year: "2025",
    description: {
      pt: "Gerencie suas finanças de forma prática — acompanhe receitas, despesas e saldo em um dashboard interativo, com autenticação, dark/light mode e design responsivo.",
      en: "Manage your finances in a practical way — track income, expenses and balance on an interactive dashboard, with authentication, dark/light mode and responsive design.",
    },
    technologies: ["React", "TypeScript", "Firebase", "Styled Components", "Recharts"],
    repositoryUrl: "https://github.com/leocoliveiraa/vaultmapz",
    demoUrl: "https://vaultmapz.vercel.app",
    image: "/vaultmapz.png",
  },
  {
    id: "RoundCorners",
    title: "Round Corners",
    year: "2025",
    description: {
      pt: "Uma ferramenta web simples e intuitiva para arredondar os cantos de imagens online. Interface drag-and-drop com preview em tempo real.",
      en: "A simple and intuitive web tool for rounding image corners online. Drag-and-drop interface with real-time preview.",
    },
    technologies: ["HTML5 Canvas", "JavaScript", "CSS3"],
    repositoryUrl: "https://github.com/leocoliveiraa/round-corners",
    demoUrl: "https://roundcorners.vercel.app",
    image: "/roundcorners.png",
  },
  {
    id: "LariStudio",
    title: "LariStudio Portfólio",
    year: "2025",
    description: {
      pt: "Um site portfólio criado para a LariStudio! Uma designer gráfica para marcas alternativas, fofas & autênticas.",
      en: "A website portfolio created for LariStudio! A graphic designer for alternative, cute and authentic brands.",
    },
    technologies: ["React", "TypeScript", "Styled Components", "Vercel"],
    repositoryUrl: "https://github.com/leocoliveiraa/laristudio",
    demoUrl: "https://laristudio.com",
    image: "/laristudio.png",
  },
  {
    id: "notedz",
    title: "Notedz",
    year: "2024",
    description: {
      pt: "Uma aplicação para escrever e anotar tudo o que você quiser! Desde receitas, até ideias, histórias ou roteiros!",
      en: "An application to write and note everything you want! From recipes to ideas, stories or scripts!",
    },
    technologies: ["React", "Styled Components", "Quill", "Local Storage"],
    repositoryUrl: "https://github.com/leocoliveiraa/notedz",
    demoUrl: "https://notedz.vercel.app",
    image: "/notedz.png",
  },
];

const translations = {
  en: {
    title: "Projects",
    subtitle: "A selection of projects I've built with passion and dedication",
    repository: "Code",
    visit: "Live Demo",
    noProjects: {
      title: "No projects yet",
      description: "New projects coming soon!",
    },
  },
  pt: {
    title: "Projetos",
    subtitle: "Uma seleção de projetos que construí com paixão e dedicação",
    repository: "Código",
    visit: "Ver Demo",
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
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const LoadingProjectCard = React.useMemo(
    () => (
      <LoadingCard>
        <LoadingImage />
        <LoadingContent>
          <LoadingElement className="title" />
          <LoadingElement className="description" />
          <LoadingElement className="description" />
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <LoadingElement className="tech" />
            <LoadingElement className="tech" />
            <LoadingElement className="tech" />
          </div>
          <div>
            <LoadingElement className="button" />
            <LoadingElement className="button" />
          </div>
        </LoadingContent>
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
        <ProjectsGrid>
          {[1, 2, 3, 4].map((item) => (
            <React.Fragment key={item}>{LoadingProjectCard}</React.Fragment>
          ))}
        </ProjectsGrid>
      ) : visibleProjects.length === 0 ? (
        <ProjectsGrid>
          <EmptyState>
            <FiFolder />
            <h3>{t.noProjects.title}</h3>
            <p>{t.noProjects.description}</p>
          </EmptyState>
        </ProjectsGrid>
      ) : (
        <ProjectsGrid>
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              $featured={project.featured}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ImageContainer>
                <ProjectImage
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <ImageOverlay className="project-overlay">
                  <OverlayButton
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FiGithub />
                  </OverlayButton>
                  <OverlayButton
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <FiExternalLink />
                  </OverlayButton>
                </ImageOverlay>
              </ImageContainer>

              <ProjectContent>
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectYear>{project.year}</ProjectYear>
                </ProjectHeader>

                <ProjectDescription>
                  {project.description[language]}
                </ProjectDescription>

                <TechnologiesList>
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <TechnologyTag key={techIndex}>{tech}</TechnologyTag>
                  ))}
                </TechnologiesList>

                <ProjectActions>
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
                    <FiExternalLink />
                    {t.visit}
                  </ActionButton>
                </ProjectActions>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      )}
    </Container>
  );
};

export default Projects;
