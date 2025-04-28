import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaBook, FaCalendarAlt } from "react-icons/fa";

const Div = styled.div`
  margin-top: 5vh;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: rgb(113, 103, 255);
  }
`;

const Content = styled.div`
  display: flex;
  border-radius: 8px;
  transition: all 0.3s ease;
  align-items: center;
  flex-direction: column;
  &:hover {
    background-color: rgba(113, 103, 255, 0.05);
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(113, 103, 255, 0.1);
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    margin-bottom: 0;
    margin-right: 1.25rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
`;

const Subcontent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const UniTitle = styled(InfoItem)`
  font-weight: 500;
  font-size: 1.1rem;
`;

const UniCourse = styled(InfoItem)`
  font-size: 1rem;
`;

const Duration = styled(InfoItem)`
  font-size: 0.9rem;
  color: rgb(197, 197, 197);
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: rgb(113, 103, 255);
  min-width: 20px;
`;

const TextWrapper = styled.span`
  flex: 1;
`;

const Education = () => {
  return (
    <Div id="education">
      <SectionTitle>Educação</SectionTitle>
      <Content>
        <ImageContainer>
          <Image
            src="https://www.gebrasil.com.br/wp-content/uploads/2017/07/Logo-Uninter.jpg"
            alt="Logo UNINTER"
          />
        </ImageContainer>
        <Subcontent>
          <UniTitle>
            <IconWrapper>
              <FaGraduationCap size={20} />
            </IconWrapper>
            <TextWrapper>UNINTER</TextWrapper>
          </UniTitle>
          <UniCourse>
            <IconWrapper>
              <FaBook size={20} />
            </IconWrapper>
            <TextWrapper>Análise e Desenv. de Sistemas</TextWrapper>
          </UniCourse>
          <Duration>
            <IconWrapper>
              <FaCalendarAlt size={20} />
            </IconWrapper>
            <TextWrapper>2025-2027</TextWrapper>
          </Duration>
        </Subcontent>
      </Content>
    </Div>
  );
};

export default Education;
