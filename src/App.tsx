import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import BlogPost from "./routes/BlogPost";
import Projects from "./routes/Projects";
import ProjectItem from "./routes/ProjectItem";
import "./styles/global.css";

function setThemeVars(theme: typeof lightTheme | typeof darkTheme) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([k, v]) => {
    root.style.setProperty(`--${k}`, v as string);
  });
  root.setAttribute("data-theme", theme.name);
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

export default function App() {
  useEffect(() => {
    setThemeVars(getThemeByLocalTime());
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Layout>
              <ProjectItem />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
