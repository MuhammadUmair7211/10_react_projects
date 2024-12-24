import Button from "../Button/Button";
import Form from "../Form/Form";
const ContactForm = () => {
  return (
    <div className="main">
      <div className="main-text">
        <div className="btn-container">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<i className="fa-regular fa-message"></i>}
          />
          <Button
            text="VIA CALL"
            icon={<i className="fa-solid fa-phone"></i>}
          />
        </div>
        <Button
          isTrue={true}
          text="VIA EMAIL FORM"
          icon={<i className="fa-regular fa-envelope"></i>}
        />
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
