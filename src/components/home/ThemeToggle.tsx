import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-card text-card-foreground">
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
