import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  FiSun,
  FiHome,
  FiFolder,
  FiUser,
  FiMail,
  FiMenu,
  FiGlobe,
} from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  language: "en" | "pt";
  toggleLanguage: () => void;
}

interface ThemeToggleProps {
  isDark: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.35rem 1rem;
  position: fixed;
  top: 0.35rem;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1rem;
  }
`;

const NavInner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  width: min(860px, calc(100% - 2rem));
  padding: 0.55rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.text}12;
  border-radius: 999px;
  background: ${({ theme }) => theme.background}d9;
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
  position: relative;
  pointer-events: auto;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 1rem);
    align-items: center;
  }
`;

const Brand = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
  padding-left: 0.7rem;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const DesktopNavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    padding: 0.5rem 0.7rem;
    border-radius: 20px;
    transition: all 0.3s ease;
    opacity: 0.8;
    font-weight: 500;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: ${({ theme }) => theme.text}08;
      border-radius: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      opacity: 1;
      transform: translateY(-1px);

      &::before {
        opacity: 1;
      }
    }

    &.active {
      opacity: 1;
      font-weight: 600;
      color: ${({ theme }) => theme.text};

      &::before {
        opacity: 1;
        background: ${({ theme }) => theme.text}12;
      }
    }

    svg {
      font-size: 1rem;
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }
`;

const DesktopControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.55rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 1002;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.text}10;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MobileMenuOverlay = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  border-left: 1px solid ${({ theme }) => theme.text}10;
  backdrop-filter: blur(20px);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "-4px 0 20px rgba(0, 0, 0, 0.15)" : "none"};

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.text}10;
`;

const MobileMenuTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;
const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s ease;
    opacity: 0.8;
    font-weight: 500;
    font-size: 0.95rem;

    &:hover {
      opacity: 1;
      background: ${({ theme }) => theme.text}08;
      transform: translateX(5px);
    }

    &.active {
      opacity: 1;
      background: ${({ theme }) => theme.text}12;
      font-weight: 600;
    }

    svg {
      font-size: 1.1rem;
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }
`;

const MobileControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.text}10;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.text}10;
    transform: translateY(-1px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const ThemeToggle = styled.button<ThemeToggleProps>`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ isDark }) =>
      isDark
        ? "radial-gradient(circle, rgba(250, 204, 21, 0.1) 0%, transparent 70%)"
        : "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    transition: all 0.3s ease;
    z-index: 2;
    color: ${({ isDark }) => (isDark ? "#facc15" : "#a855f7")};
  }

  &:hover {
    transform: rotate(15deg) scale(1.05);
    border-color: ${({ theme }) => theme.text}20;

    &::before {
      opacity: 1;
    }
  }
`;

const LanguageToggle = styled.button`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle,
      rgba(34, 197, 94, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    transition: all 0.3s ease;
    z-index: 2;
    color: #22c55e;
  }

  &:hover {
    transform: rotate(15deg) scale(1.05);
    border-color: ${({ theme }) => theme.text}20;

    &::before {
      opacity: 1;
    }
  }
`;

const translations = {
  en: {
    menu: "Menu",
    home: "home",
    projects: "projects",
    about: "about",
    contact: "contact",
    theme: "Toggle theme",
    language: "Change language",
    currentLang: "EN",
  },
  pt: {
    menu: "Menu",
    home: "início",
    projects: "projetos",
    about: "sobre",
    contact: "contato",
    theme: "Alternar tema",
    language: "Mudar idioma",
    currentLang: "PT",
  },
};

const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  language,
  toggleLanguage,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = translations[language];
  const navItems = useMemo(
    () => [
      { id: "home", label: t.home, icon: FiHome },
      { id: "projects", label: t.projects, icon: FiFolder },
      { id: "about", label: t.about, icon: FiUser },
      { id: "contact", label: t.contact, icon: FiMail },
    ],
    [t.about, t.contact, t.home, t.projects]
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      <NavbarContainer>
        <NavInner>
          <Brand href="#home">Leonardo</Brand>

          <DesktopNavItems>
            {navItems.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
              >
                <Icon />
                {label}
              </a>
            ))}
          </DesktopNavItems>

          <DesktopControls>
            <ThemeToggle onClick={toggleTheme} title={t.theme} isDark={isDark}>
              {isDark ? <FiSun /> : <FaRegMoon />}
            </ThemeToggle>
            <LanguageToggle onClick={toggleLanguage} title={t.language}>
              <FiGlobe />
            </LanguageToggle>
          </DesktopControls>

          <MobileControls>
            <MobileMenuButton
              onClick={toggleMobileMenu}
              aria-label={t.menu}
              aria-expanded={isMobileMenuOpen}
            >
              <FiMenu />
            </MobileMenuButton>
          </MobileControls>
        </NavInner>
      </NavbarContainer>

      {/* Mobile Menu */}
      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <MobileMenuTitle>{t.menu}</MobileMenuTitle>
        </MobileMenuHeader>

        <MobileNavItems>
          {navItems.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={closeMobileMenu}
            >
              <Icon />
              {label}
            </a>
          ))}
        </MobileNavItems>

        <MobileControlsSection>
          <ControlButton onClick={toggleTheme}>
            {isDark ? <FiSun /> : <FaRegMoon />}
            {t.theme}
          </ControlButton>

          <ControlButton onClick={toggleLanguage}>
            <FiGlobe />
            {t.language} ({t.currentLang})
          </ControlButton>
        </MobileControlsSection>
      </MobileMenu>
    </>
  );
};

export default Navbar;
