import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'; // Import HashRouter

import Header from "./components/Header";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import HireMe from "./pages/HireMe";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <HashRouter> {/* Use HashRouter instead of Router */}
      <Header />
      <Routes>
        {/* Render all pages on the root route */}
        <Route path="/" element={
          <>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
            <Page8 />
          </>
        } />
        {/* Individual page routes */}
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
