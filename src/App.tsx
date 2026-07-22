import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Main = styled.main`
  width: 100%;
`;

const Section = styled.section`
  scroll-margin-top: 5rem;
`;

function App() {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState<"en" | "pt">("pt");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar
        isDark={isDark}
        toggleTheme={() => setIsDark((prev) => !prev)}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <Main>
        <Section id="home">
          <Home language={language} />
        </Section>
        <Section id="projects">
          <Projects language={language} />
        </Section>
        <Section id="about">
          <About language={language} />
        </Section>
        <Section id="contact">
          <Contact language={language} />
        </Section>
      </Main>
    </ThemeProvider>
  );
}

export default App;
