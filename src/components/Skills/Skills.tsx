import { useState } from "react";
import { SKILLS } from "../../utils/data";
import "./Skills.css";
import { SkillsCard } from "./SkillsCard/SkillsCard";
import { SkillsInfoCard } from "./SkillsInfoCard/SkillsInfoCard";

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data: (typeof SKILLS)[0]) => {
    setSelectedSkill(data);
  };

  return (
    <section id="skills-section" className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};
