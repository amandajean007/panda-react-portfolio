import React, {useState} from 'react';
import "./Contact.css"

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div className="contact">
      <h2>Contact Me:</h2>
      <div className="card">
        <div className="card-content">
            <p></p>
        </div>
        <form className="contact-form">
          <label >
            Name:
            <input type='text' className="text-box" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </label>
          <label >
            Email:
            <input type='email' className="text-box" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <label>
            Message:
            <textarea name="message" cols="100" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          </label>
          <input type="submit" name="submit"value='Submit' className="submit" />
        </form>
      </div>
      
    </div>
  );
}

export default Contact;