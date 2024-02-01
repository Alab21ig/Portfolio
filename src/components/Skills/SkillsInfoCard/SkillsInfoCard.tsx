import React from "react";
import { Skills } from "../Skills";
import "./SkillsInfoCard.css";

type SkillsInfoCardProps = {
  heading: string;
  skills: { skill: string; percentage: string }[];
};

export const SkillsInfoCard = ({ heading, skills }: SkillsInfoCardProps) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skills_${index}`}>
            <p>{item.skill}</p>
            <p className="percentage">{item.percentage}</p>

            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
