import { useRef } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import { ProjectCard, ProjectCardProps } from "./ProjectCard/ProjectCard";
import Slider, { Settings } from "react-slick";
import {
  CustomSlickArrowNext,
  CustomSlickArrowPrev,
} from "./CustomSlickArrows/CustomSlickArrows";
// import "./CustomSlickArrows.css";

export const Projects = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handleNextArrowClick = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevArrowClick = () => {
    sliderRef.current?.slickPrev();
  };

  const setting = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomSlickArrowPrev onClick={handlePrevArrowClick} />,
    nextArrow: <CustomSlickArrowNext onClick={handleNextArrowClick} />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  } as Settings;

  return (
    <section id="projects-section" className="project-container">
      <h5>Projects</h5>
      <div className="project-content">
        <div className="arrow-right"></div>
        <Slider ref={sliderRef} {...setting}>
          {PROJECTS.map((item: ProjectCardProps) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              details={item.details}
              link={item.link}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
