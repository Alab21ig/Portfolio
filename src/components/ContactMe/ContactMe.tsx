import "./ContactMe.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactMeCard } from "./ContactMeCard/ContactMeCard";

export const ContactMe = () => {
  return (
    <section id="contacts-section" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div>
          <ContactMeCard
            iconUrl="./assets/images/email-icon.png"
            text="AbdulmalikAlotaibi333@gmail.com"
          />
          {/* <ContactMeCard
            iconUrl="./assets/images/github-icon.png"
            text="https://github.com/Alab21ig"
          /> */}
        </div>
        {/* <div>
          <ContactForm />
        </div> */}
        <ContactMeCard
          iconUrl="./assets/images/github-icon.png"
          text="Github.com/Alab21ig"
        />
      </div>
    </section>
  );
};
