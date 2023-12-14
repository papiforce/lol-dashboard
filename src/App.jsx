import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Theme from "utils/Theme";

const HomePage = lazy(() => import("pages/HomePage"));
const ChampionPage = lazy(() => import("pages/ChampionPage"));

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Suspense>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/champion" element={<ChampionPage />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
