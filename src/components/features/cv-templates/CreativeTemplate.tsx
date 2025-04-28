import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import "./templates.scss";
import {
  getUserFullName,
  getUserPosition,
  getUserAddress,
  getUserSummary,
  adaptExperience,
  adaptEducation,
  adaptSkills,
  adaptLanguages,
} from "./templateAdapters";

const CreativeTemplate: React.FC = () => {
  const state = useSelector((state: RootState) => state);
  const userInfo = state.userInformation;

  // Use adapter functions to format data for the template
  const experience = adaptExperience(state.experience);
  const education = adaptEducation(state.education);
  const skills = adaptSkills(state.mySkill);
  const languages = adaptLanguages(state.languages);

  return (
    <div className="cv-template creative-template">
      <div className="template-header">
        <div className="header-content">
          <h1 className="name">{getUserFullName(userInfo)}</h1>
          <p className="position">{getUserPosition(userInfo)}</p>
          <div className="header-divider"></div>
          <p className="summary">{getUserSummary(userInfo)}</p>
        </div>
        <div className="header-background"></div>
      </div>

      <div className="main-grid">
        <div className="left-column">
          <section className="contact-section">
            <h2>Contact</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon email-icon"></div>
                <span>{userInfo.email || "email@example.com"}</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon phone-icon"></div>
                <span>{userInfo.phone || "Phone Number"}</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon location-icon"></div>
                <span>{getUserAddress(userInfo)}</span>
              </div>
            </div>
          </section>

          <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.items.length > 0 ? (
                skills.items.map((skill, index) => (
                  <div key={index} className="skill-bubble">
                    {skill.name}
                  </div>
                ))
              ) : (
                <p className="placeholder">Add your skills</p>
              )}
            </div>
          </section>

          <section className="languages-section">
            <h2>Languages</h2>
            <div className="languages-list">
              {languages.items.length > 0 ? (
                languages.items.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <div className="language-level-circles">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`level-circle ${
                            parseInt(lang.level) >= level ? "filled" : ""
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="placeholder">Add languages</p>
              )}
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="experience-section">
            <h2>Experience</h2>
            <div className="timeline">
              {experience.items.length > 0 ? (
                experience.items.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="content-header">
                        <h3>{exp.position}</h3>
                        <span className="date">
                          {exp.startDate} - {exp.endDate || "Present"}
                        </span>
                      </div>
                      <p className="company">{exp.company}</p>
                      <p className="description">{exp.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="placeholder">Add your work experience</p>
              )}
            </div>
          </section>

          <section className="education-section">
            <h2>Education</h2>
            <div className="timeline">
              {education.items.length > 0 ? (
                education.items.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="content-header">
                        <h3>{edu.degree}</h3>
                        <span className="date">
                          {edu.startDate} - {edu.endDate || "Present"}
                        </span>
                      </div>
                      <p className="school">{edu.school}</p>
                      <p className="description">{edu.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="placeholder">Add your education</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
