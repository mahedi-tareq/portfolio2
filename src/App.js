import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { Route } from "react-router-dom";
import Projects from "./components/pages/projects/Projects";
import Resume from "./components/pages/resume/Resume";

export default function App() {
  return (
    <>
      <Route exact path="/" component={Layout} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </>
  );
}
