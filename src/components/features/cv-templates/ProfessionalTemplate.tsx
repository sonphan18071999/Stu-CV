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
  adaptKnowledge,
} from "./templateAdapters";

const ProfessionalTemplate: React.FC = () => {
  const state = useSelector((state: RootState) => state);
  const userInfo = state.userInformation;

  // Use adapter functions to format data for the template
  const experience = adaptExperience(state.experience);
  const education = adaptEducation(state.education);
  const skills = adaptSkills(state.mySkill);
  const languages = adaptLanguages(state.languages);
  const industryKnowledge = adaptKnowledge(state.industryKnowledge);

  return (
    <div className="cv-template professional-template">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="profile-img">
            {/* Profile placeholder */}
            <div className="profile-placeholder"></div>
          </div>
          <h2 className="name">{getUserFullName(userInfo)}</h2>
          <p className="position">{getUserPosition(userInfo)}</p>
        </div>

        <div className="sidebar-section">
          <h3>Contact</h3>
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span>{userInfo.email || "email@example.com"}</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <span>{userInfo.phone || "Phone Number"}</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Address</span>
            <span>{getUserAddress(userInfo)}</span>
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Skills</h3>
          <div className="skills-container">
            {skills.items.length > 0 ? (
              skills.items.map((skill, index) => (
                <div key={index} className="skill-with-level">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level-bar">
                    <div
                      className="skill-level-fill"
                      style={{ width: `${(skill.level || 3) * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="placeholder">Add your skills</p>
            )}
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Languages</h3>
          <div className="languages-container">
            {languages.items.length > 0 ? (
              languages.items.map((lang, index) => (
                <div key={index} className="language-with-level">
                  <span className="language-name">{lang.name}</span>
                  <div className="language-level">{lang.level}</div>
                </div>
              ))
            ) : (
              <p className="placeholder">Add languages</p>
            )}
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Industry Knowledge</h3>
          <div className="knowledge-container">
            {industryKnowledge.items.length > 0 ? (
              industryKnowledge.items.map((item, index) => (
                <div key={index} className="knowledge-item">
                  {item.name}
                </div>
              ))
            ) : (
              <p className="placeholder">Add industry knowledge</p>
            )}
          </div>
        </div>
      </div>

      <div className="main-content">
        <section className="profile-section">
          <h2>Profile</h2>
          <p>{getUserSummary(userInfo)}</p>
        </section>

        <section className="experience-section">
          <h2>Work Experience</h2>
          {experience.items.length > 0 ? (
            experience.items.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-timeline">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="experience-content">
                  <h3>{exp.position}</h3>
                  <div className="experience-details">
                    <span className="company">{exp.company}</span>
                    <span className="dates">
                      {exp.startDate} - {exp.endDate || "Present"}
                    </span>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="placeholder">Add your work experience</p>
          )}
        </section>

        <section className="education-section">
          <h2>Education</h2>
          {education.items.length > 0 ? (
            education.items.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-timeline">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <div className="education-details">
                    <span className="school">{edu.school}</span>
                    <span className="dates">
                      {edu.startDate} - {edu.endDate || "Present"}
                    </span>
                  </div>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="placeholder">Add your education</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
