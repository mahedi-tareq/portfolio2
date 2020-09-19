import React from "react";
import "./projects.css";
import professionals from "../../../assets/images/1.jpg";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="project_container">
      <div className="projects_nav">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <h2 className="title">Projects</h2>
      <div className="projects">
        <div className="single_project">
          <div className="single_project_img_btn">
            <li>
              <Link to="https://google.com">Demo</Link>
              <Link to="https://google.com">Code</Link>
            </li>
            <img src={professionals} alt="Project image" />
          </div>
          <h6 className="single_project_tags">#react #html #css</h6>
          <h3 className="single_project_name">Project Name</h3>
          <p className="single_project_desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, et. Inventore illum rem sit necessitatibus perferendis
            ad nam ipsam sapiente?
          </p>
        </div>

        <div className="single_project">
          <div className="single_project_img_btn">
            <li>
              <Link to="https://google.com">Demo</Link>
              <Link to="https://google.com">Code</Link>
            </li>
            <img src={professionals} alt="Project image" />
          </div>
          <h6 className="single_project_tags">#react #html #css</h6>
          <h3 className="single_project_name">Project Name</h3>
          <p className="single_project_desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, et. Inventore illum rem sit necessitatibus perferendis
            ad nam ipsam sapiente?
          </p>
        </div>

        <div className="single_project">
          <div className="single_project_img_btn">
            <li>
              <Link to="https://google.com">Demo</Link>
              <Link to="https://google.com">Code</Link>
            </li>
            <img src={professionals} alt="Project image" />
          </div>
          <h6 className="single_project_tags">#react #html #css</h6>
          <h3 className="single_project_name">Project Name</h3>
          <p className="single_project_desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, et. Inventore illum rem sit necessitatibus perferendis
            ad nam ipsam sapiente?
          </p>
        </div>

        <div className="single_project">
          <div className="single_project_img_btn">
            <li>
              <Link to="https://google.com">Demo</Link>
              <Link to="https://google.com">Code</Link>
            </li>
            <img src={professionals} alt="Project image" />
          </div>
          <h6 className="single_project_tags">#react #html #css</h6>
          <h3 className="single_project_name">Project Name</h3>
          <p className="single_project_desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, et. Inventore illum rem sit necessitatibus perferendis
            ad nam ipsam sapiente?
          </p>
        </div>
      </div>
    </div>
  );
}
