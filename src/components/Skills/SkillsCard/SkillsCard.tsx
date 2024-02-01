import "./SkillsCard.css";

type SkillsCardProps = {
  title: string;
  iconUrl: string;
  isActive: boolean;
  onClick: () => void;
};

export const SkillsCard = ({
  title,
  iconUrl,
  isActive,
  onClick,
}: SkillsCardProps) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};
