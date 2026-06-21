import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import BlogPost from "./routes/BlogPost";
import Projects from "./routes/Projects";
import ProjectItem from "./routes/ProjectItem";
import "./styles/global.css";

type Theme = typeof lightTheme | typeof darkTheme;

const themeCookieName = "rg-theme";

function setThemeVars(theme: Theme) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([k, v]) => {
    root.style.setProperty(`--${k}`, v as string);
  });
  root.setAttribute("data-theme", theme.name);
}

function getThemeByName(name: string | undefined) {
  if (name === lightTheme.name) return lightTheme;
  if (name === darkTheme.name) return darkTheme;
  return null;
}

function getThemeCookie() {
  const themeCookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${themeCookieName}=`));

  return themeCookie ? decodeURIComponent(themeCookie.split("=")[1] ?? "") : undefined;
}

function saveThemeCookie(theme: Theme) {
  const maxAgeSeconds = 60 * 60 * 24 * 365;
  document.cookie = `${themeCookieName}=${encodeURIComponent(theme.name)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
}

function getThemeByLocalTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const isLight = hours > 9 || (hours === 9 && minutes >= 0)
    ? hours < 17 || (hours === 17 && minutes <= 30)
    : false;
  return isLight ? lightTheme : darkTheme;
}

function getInitialTheme() {
  return getThemeByName(getThemeCookie()) ?? getThemeByLocalTime();
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    setThemeVars(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current.name === lightTheme.name ? darkTheme : lightTheme;
      saveThemeCookie(nextTheme);
      return nextTheme;
    });
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout themeName={theme.name} onThemeToggle={toggleTheme}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout themeName={theme.name} onThemeToggle={toggleTheme}>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout themeName={theme.name} onThemeToggle={toggleTheme}>
              <BlogPost />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout themeName={theme.name} onThemeToggle={toggleTheme}>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Layout themeName={theme.name} onThemeToggle={toggleTheme}>
              <ProjectItem />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
