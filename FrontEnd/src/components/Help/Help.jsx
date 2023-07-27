import React from "react";
import "./help.css";
import chat from "assets/images/chat-logo.png";
import email from "assets/images/email-logo.png";
import form from "assets/images/form-logo.png";
const Help = () => {
  return (
    <>
      <section className="banner">
        <div>
          <h1>Need help?</h1>
        </div>
      </section>

      <section className="content">
        <div>
          <h2>Let us know how we can be of help!</h2>
        </div>

        <div className="logo">
          <div>
            <img src={chat} alt="chat"></img>
            <h4>Chat Us</h4>
          </div>

          <div>
            <img src={email} alt="email"></img>
            <h4>Email Us</h4>
          </div>

          <div>
            <img src={form} alt="form"></img>
            <h4>Submit A Form </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
