import "./ContactMeCard.css";

type ContactMeCardProps = {
  iconUrl: string;
  text: string;
};

export const ContactMeCard = ({ iconUrl, text }: ContactMeCardProps) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt="text" />
      </div>
      <p>{text}</p>
    </div>
  );
};
