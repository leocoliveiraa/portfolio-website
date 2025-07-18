import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "pt">("pt");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar
        isDark={isDark}
        toggleTheme={() => setIsDark((prev) => !prev)}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/projects" element={<Projects language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
