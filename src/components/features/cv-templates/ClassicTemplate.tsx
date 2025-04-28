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

const ClassicTemplate: React.FC = () => {
  const state = useSelector((state: RootState) => state);
  const userInfo = state.userInformation;

  // Use adapter functions to format data for the template
  const experience = adaptExperience(state.experience);
  const education = adaptEducation(state.education);
  const skills = adaptSkills(state.mySkill);
  const languages = adaptLanguages(state.languages);

  return (
    <div className="cv-template classic-template">
      <header className="classic-header">
        <h1 className="name">{getUserFullName(userInfo)}</h1>
        <p className="title">{getUserPosition(userInfo)}</p>
      </header>

      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Email:</span>
          <span>{userInfo.email || "email@example.com"}</span>
        </div>
        <div className="contact-item">
          <span className="label">Phone:</span>
          <span>{userInfo.phone || "Phone Number"}</span>
        </div>
        <div className="contact-item">
          <span className="label">Address:</span>
          <span>{getUserAddress(userInfo)}</span>
        </div>
      </div>

      <section className="classic-section">
        <h2>Professional Summary</h2>
        <hr />
        <p>{getUserSummary(userInfo)}</p>
      </section>

      <section className="classic-section">
        <h2>Work Experience</h2>
        <hr />
        {experience.items.length > 0 ? (
          experience.items.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.position}</h3>
              <p className="company-date">
                {exp.company} | {exp.startDate} - {exp.endDate || "Present"}
              </p>
              <p className="description">{exp.description}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your work experience</p>
        )}
      </section>

      <section className="classic-section">
        <h2>Education</h2>
        <hr />
        {education.items.length > 0 ? (
          education.items.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.degree}</h3>
              <p className="school-date">
                {edu.school} | {edu.startDate} - {edu.endDate || "Present"}
              </p>
              <p className="description">{edu.description}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your education</p>
        )}
      </section>

      <section className="classic-section">
        <h2>Skills</h2>
        <hr />
        {skills.items.length > 0 ? (
          <div className="skills-container">
            {skills.items.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.name}
              </div>
            ))}
          </div>
        ) : (
          <p className="placeholder">Add your skills</p>
        )}
      </section>

      <section className="classic-section">
        <h2>Languages</h2>
        <hr />
        {languages.items.length > 0 ? (
          <div className="languages-container">
            {languages.items.map((lang, index) => (
              <div key={index} className="language-item">
                {lang.name} - {lang.level}
              </div>
            ))}
          </div>
        ) : (
          <p className="placeholder">Add languages</p>
        )}
      </section>
    </div>
  );
};

export default ClassicTemplate;
