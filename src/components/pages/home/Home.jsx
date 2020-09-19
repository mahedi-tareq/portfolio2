import React from "react";
import "./home.css";
import EmailIcon from "@material-ui/icons/Email";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2 className="hero_name">Hey, I'm Tareq</h2>
          <p className="intro">
            An Entry-level web developer with a Bachelor Degree in Computer
            Science and eager-to-learn approach where i can deploy my excellent
            development skills.
          </p>
          <div className="hero_contact">
            <li>
              <span className="mobile_icon">
                <PhonelinkRingIcon />
              </span>
              01937824246
            </li>
            <li>
              <span className="mobile_icon">
                <EmailIcon />
              </span>
              mhtareqarz@gmail.com
            </li>
          </div>
          <div className="goto_btn">
            <Link to="/resume" className="resume_btn">
              Resume
            </Link>
            <Link to="/projects" className="projects_btn">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
