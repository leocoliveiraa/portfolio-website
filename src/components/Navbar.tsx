import React, { useState, useEffect } from "react";
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
import { Link, useLocation } from "react-router-dom";

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
  padding: 1.25rem 1rem;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1rem;
  }
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;

const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  position: relative;
  padding-bottom: 8px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &::after {
    content: "";
    width: 24px;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.text}60,
      ${({ theme }) => theme.text}
    );
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    transition: width 0.3s ease;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
    font-size: 1.2rem;
  }
`;

const DesktopNavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.75rem;
  position: relative;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.text}02;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.text}08;
  backdrop-filter: blur(10px);

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
    padding: 0.5rem 0.8rem;
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
    color: ${({ isDark }) => (isDark ? "#a855f7" : "#facc15")};
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
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
          <Name>Leonardo</Name>

          <DesktopNavItems>
            <ThemeToggle onClick={toggleTheme} title={t.theme} isDark={isDark}>
              {isDark ? <FaRegMoon /> : <FiSun />}
            </ThemeToggle>

            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <FiHome />
              {t.home}
            </Link>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              <FiFolder />
              {t.projects}
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              <FiUser />
              {t.about}
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              <FiMail />
              {t.contact}
            </Link>
            <LanguageToggle onClick={toggleLanguage} title={t.language}>
              <FiGlobe />
            </LanguageToggle>
          </DesktopNavItems>

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
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            <FiHome />
            {t.home}
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            <FiFolder />
            {t.projects}
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            <FiUser />
            {t.about}
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            <FiMail />
            {t.contact}
          </Link>
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
