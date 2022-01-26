import React from "react";
import classes from './Contact.module.css';
import NeonButton from '../UI/NeonButton/NeonButton'

const Contact = () => {

  return (
    <div className={classes.Contact} id="contact">
      
        <h2>Get in touch</h2>
        <form 
        name="contact" 
        method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email"  placeholder="Email" />
          <textarea type="textArea" name="message" placeholder="Message" cols={30} rows={10} > 
          </textarea>
          <NeonButton buttonType="submit">Send <i class="fa fa-paper-plane" aria-hidden="true"></i></NeonButton>
        </form>
      
    </div>
  );
};

export default Contact;
