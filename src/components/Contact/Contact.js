import React, {useState} from "react";
import classes from './Contact.module.css';
import NeonButton from '../UI/NeonButton/NeonButton'

const Contact = () => {
  
  const [form, setform] = useState({
    name: null,
    email: null,
    subject: null,
    message: null
  });

  return (
    <div className={classes.Contact} id="contact">
      <div>
        <h2>Contact Me</h2>
        <form name="contact" netlify>
          <input type="text" name="name" placeholder="Name" 
          onChange={(event )=> setform({...form, name: event.target.value})}/>
          <input type="email" name="email"  placeholder="Email" 
          onChange={(event )=> setform({...form, email: event.target.value})}/>
          <textarea type="textArea" name="message" placeholder="Message" cols={30} rows={10}
          onChange={(event )=> setform({...form, message: event.target.value})} > 
          </textarea>
          <NeonButton >Send <i class="fa fa-paper-plane" aria-hidden="true"></i></NeonButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
