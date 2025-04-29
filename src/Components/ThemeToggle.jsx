import { useState, useEffect } from "react";
import "./theme.css"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <label className="switch">
      <input type="checkbox" checked={isDark} onChange={() => setIsDark(!isDark)} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
