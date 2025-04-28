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

const ModernTemplate: React.FC = () => {
  const state = useSelector((state: RootState) => state);
  const userInfo = state.userInformation;

  // Use adapter functions to format data for the template
  const experience = adaptExperience(state.experience);
  const education = adaptEducation(state.education);
  const skills = adaptSkills(state.mySkill);
  const languages = adaptLanguages(state.languages);

  return (
    <div className="cv-template modern-template">
      <header className="modern-header">
        <h1>{getUserFullName(userInfo)}</h1>
        <p className="job-title">{getUserPosition(userInfo)}</p>
        <div className="contact-info">
          <span>{userInfo.email || "email@example.com"}</span>
          <span>{userInfo.phone || "Phone Number"}</span>
          <span>{getUserAddress(userInfo)}</span>
        </div>
      </header>

      <section className="modern-section">
        <h2>Summary</h2>
        <p>{getUserSummary(userInfo)}</p>
      </section>

      <section className="modern-section">
        <h2>Experience</h2>
        {experience.items.length > 0 ? (
          experience.items.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.position}</h3>
                <span className="date">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              <p className="company">{exp.company}</p>
              <p>{exp.description}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your work experience</p>
        )}
      </section>

      <section className="modern-section">
        <h2>Education</h2>
        {education.items.length > 0 ? (
          education.items.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="date">
                  {edu.startDate} - {edu.endDate || "Present"}
                </span>
              </div>
              <p className="institution">{edu.school}</p>
              <p>{edu.description}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your education</p>
        )}
      </section>

      <div className="side-columns">
        <section className="modern-side-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            {skills.items.length > 0 ? (
              skills.items.map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))
            ) : (
              <li className="placeholder">Add your skills</li>
            )}
          </ul>
        </section>

        <section className="modern-side-section">
          <h2>Languages</h2>
          <ul className="languages-list">
            {languages.items.length > 0 ? (
              languages.items.map((lang, index) => (
                <li key={index}>
                  {lang.name} - {lang.level}
                </li>
              ))
            ) : (
              <li className="placeholder">Add languages</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ModernTemplate;
