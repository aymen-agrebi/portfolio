import React from "react";
import classes from "./Contact.module.css";
import NeonButton from "../UI/NeonButton/NeonButton";

const Contact = () => {
  return (
    <div className={classes.Contact} id="contact">
      <h2>Get in touch</h2>
      <div className={classes.ContactDetails}>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea
            type="textArea"
            name="message"
            placeholder="Message"
            cols={30}
            rows={8}></textarea>
          <NeonButton buttonType="submit">
            Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </NeonButton>
        </form>
        <div>
          <h3>Adresse and Phone</h3>
          <p>Aymen Agrebi</p>
          <p>aymen.agrebi.dev@gmail.com</p>
          <p>10 Rue abd razek chraybi</p>
          <p>Tunis, Salambo</p>
          <p>+216 27 424 712</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
