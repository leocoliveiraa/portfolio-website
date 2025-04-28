import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuButton = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1000;
  background: rgba(17, 17, 17, 0.8);
  border: none;
  color: rgb(113, 103, 255);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: rgb(113, 103, 255);
  }
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <MenuOverlay isOpen={isOpen}>
        <MenuItems>
          <MenuItem href="#about" onClick={closeMenu}>
            Sobre mim
          </MenuItem>
          <MenuItem href="#education" onClick={closeMenu}>
            Formação acadêmica
          </MenuItem>
          <MenuItem href="#projects" onClick={closeMenu}>
            Projetos
          </MenuItem>
          <MenuItem href="#stack" onClick={closeMenu}>
            Stack
          </MenuItem>
        </MenuItems>
      </MenuOverlay>
    </>
  );
};

export default MobileMenu;
