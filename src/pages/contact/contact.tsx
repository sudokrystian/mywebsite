import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-div">
      <h3 className="contact-title">Contact me</h3>
      <hr />
      <p>
        Feel free to contact me anytime if you have any questions. You can
        reach out to me on:
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/urszula-handzlik/"
              className="contact-linkedin bold-600"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://m.me/ula.handzlik"
              className="contact-messenger bold-600"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Messenger{" "}
            </a>
          </li>
          
        </ul>
        I will get back to you as soon as possible.
      </p>
    </div>
  );
};

export default Contact;
