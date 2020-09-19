import React from "react";
import "./resume.css";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume_wrapper">
      <nav className="navigation">
        <Link to="">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="resume">Resume</Link>
      </nav>
      <h3 className="resume_name">Mahedi Hasan Tarek</h3>

      {/*========================
      -----Resume Contact
      ===========================*/}
      <div className="resume_contact_info">
        <li>
          <SmartphoneIcon className="resume_icon" /> 01937824246
        </li>
        <li>
          <EmailIcon className="resume_icon" /> mhtareqarz@gmail.com
        </li>
        <li>
          <HomeIcon className="resume_icon" /> Araihazar, Narayanganj
        </li>
      </div>
      {/*========================
      -----End Resume Contact
      ===========================*/}

      {/*========================
      -----Resume Intro
      ===========================*/}
      <div className="resume_intro mb2">
        <h4 className="resume_intro_title resume_div_itle">Web Developer</h4>
        <p className="resume_intro_para">
          An Entry-level web developer with a Bachelor Degree in Computer
          Science and eager-to-learn approach where i can deploy my excellent
          development skills
        </p>
      </div>
      {/*========================
      -----End Resume Intro
      ===========================*/}

      <div className="divider"></div>

      {/*========================
      -----Resume Skills
      ===========================*/}
      <div className="resume_skills mb2">
        <h4 className="resume_skills_title resume_div_itle">Key Skills</h4>
        <div className="resume_skills_lang">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Redux Thunk</li>
          <li>Firebase</li>
          <li>SEO</li>
          <li>SMM</li>
        </div>
      </div>
      {/*========================
      -----End Resume Skills
      ===========================*/}

      <div className="divider"></div>

      {/*======================
      -----Resume Experience
      ========================*/}

      <div className="resume_experience mb2">
        <h2 className="resume_experience_title resume_div_itle">
          Professional Experience
        </h2>
        <h3 className="resume_experience_company_name">eMythMaker</h3>
        <div className="resume_experience_jobtitle">
          <h4>SEO Executive</h4>
          <li>
            <span>Dhaka, Bangladesh</span> | <span>icon Nov'18 - Mar'19</span>
          </li>
        </div>
        <p className="resume_experience_companyinfo">
          eMythMaker is an IT company based in Dhaka, Bangladesh. As an SEO
          executive i used to work in there:
        </p>
        <div className="resume_experience_job_details">
          <li>Website manage</li>
          <li>Social media manage</li>
          <li>Backlink</li>
          <li>Performance improve</li>
        </div>
      </div>
      {/*========================
      -----End Resume Experience
      ===========================*/}

      {/*========================
      -----Resume Internships
      ===========================*/}
      <div className="resume_internships mb2">
        <h4 className="resume_internships_title resume_div_itle">
          Internships
        </h4>
        <p className="resume_internships_soo">Not Yet</p>
      </div>
      {/*========================
      -----End Resume Internships
      ===========================*/}

      <div className="divider"></div>

      {/*========================
      -----Resume Education
      ===========================*/}
      <div className="resume_education mb2">
        <h2 className="resume_education_title resume_div_itle">Education</h2>
        <div className="resume_education_info">
          <h3 className="resume_education_school_name">BSc. in CSE</h3>
          <div className="resume_experience_jobtitle">
            <h4>Bangladesh University</h4>
            <li>
              <span>Dhaka, Bangladesh</span> |{" "}
              <span>
                <DateRangeIcon className="resume_icon" /> Feb'16 - Mar'19
              </span>
            </li>
          </div>
        </div>
        <div className="resume_education_info">
          <h3 className="resume_education_school_name">Diploma in Textile</h3>
          <div className="resume_experience_jobtitle">
            <h4>Shyamoli Ideal Polytechnical Institute</h4>
            <li>
              <span>Dhaka, Bangladesh</span> |{" "}
              <span>
                <DateRangeIcon className="resume_icon" /> Oct'10 - Jun'14
              </span>
            </li>
          </div>
        </div>
        <div className="resume_education_info">
          <h3 className="resume_education_school_name">SSC</h3>
          <div className="resume_experience_jobtitle">
            <h4>Araihazar Pilot High School</h4>
            <li>
              <span>Araihazar, Narayanganj</span> |{" "}
              <span>
                <DateRangeIcon className="resume_icon" /> Jan'06 - Apr'09
              </span>
            </li>
          </div>
        </div>
      </div>
      {/*========================
      -----End Resume Education
      ===========================*/}

      <div className="divider"></div>

      {/*========================
      -----Resume Additional Info
      ===========================*/}
      <div className="resume_additional mb2">
        <h3 className="resume_additional_title resume_div_itle">
          Additional Information
        </h3>
        <div className="resume_additional_info">
          <p>
            <span className="strong">Languages: </span>English, Bengali
          </p>
        </div>
      </div>
      {/*========================
      -----End Resume Additional Info
      ===========================*/}
    </div>
  );
}
