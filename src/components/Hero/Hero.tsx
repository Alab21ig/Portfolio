import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home-section" className="hero-container">
      <div className="hero-content">
        <h2>Building Experiences That inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Appealing,
          Smooth and Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react-icon.png" alt="" />
          </div>
          <img
            className="my-img"
            src="./assets/images/my-photo-v0.2.png"
            alt=""
          />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/html5-icon.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css-icon.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js-icon.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/typescript-icon.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
