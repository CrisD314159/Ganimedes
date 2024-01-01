import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gateway from "./Pages/Gateway";
import Footer from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { DarkTheme, LightTheme } from "./Style/Themes/themes";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [theme, seTheme] = useState(
    !window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleTheme = () => {
    seTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <Router>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme}></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<Gateway />}></Route>
        </Routes>
        <Footer theme={theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
