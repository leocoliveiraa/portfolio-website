import React, { useState, useEffect } from "react";
import FirstSection from "./components/FirstSection";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import MobileMenu from "./components/MobileMenu";

import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Fira Code", monospace;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 768px) {
    position: fixed;
    left: calc(50% - 330px - 80px);
    top: 10vh;
    width: 330px;
    margin-right: 80px;
  }
`;

const ContentSection = styled.div`
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    margin-left: calc(330px + 80px);
    max-width: 600px;
    padding-right: 20px;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
`;

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <Div className="App">
      <GlobalStyles />
      <ProfileContainer>
        <FirstSection isMobile={isMobile} />
      </ProfileContainer>
      <ContentSection>
        <About />
        <Education />
        <Projects />
        <Stack />
      </ContentSection>
      <MobileMenu />
    </Div>
  );
}

export default App;
