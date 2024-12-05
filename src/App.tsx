import React from "react";
import Router from "./Router";
import { ThemeProvider } from "./contexts";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
