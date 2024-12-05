import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts";
import { Dashboard } from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
