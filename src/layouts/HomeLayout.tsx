import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default HomeLayout;
