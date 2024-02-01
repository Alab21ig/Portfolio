import { PROJECTS } from "../../../utils/data";
import "./ProjectCard.css";

export type ProjectCardProps = {
  title: string;
  details: string[];
  link?: string;
};

export const ProjectCard = ({ title, details, link }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h6>{title}</h6>

      <ul>
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {link ? <div className="project-link">{link}</div> : ""}
    </div>
  );
};
