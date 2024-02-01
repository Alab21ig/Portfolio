import "./CustomSlickArrows.css";

type CustomSlickArrowsProps = {
  onClick: () => void;
};

export const CustomSlickArrowNext = ({ onClick }: CustomSlickArrowsProps) => {
  return (
    <div className="arrow-next" onClick={onClick}>
      <img src="./assets/images/arrow-next-icon.png" alt="" />
    </div>
  );
};

export const CustomSlickArrowPrev = ({ onClick }: CustomSlickArrowsProps) => {
  return (
    <div className="arrow-prev" onClick={onClick}>
      <img src="./assets/images/arrow-prev-icon.png" alt="" />
    </div>
  );
};
