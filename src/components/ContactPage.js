import React from "react";
import I4G from "../HngImg/I4G.png";
import zuriLogo from "../HngImg/zuriLogo.png";
import "./Contact.css";

export const ContactPage = () => {
  return (
    <div className="container">
      <div className="body">
        <div className="head">
          <h1>Contact Page</h1>
          <p>Hi there, contact me to me ask about anything you have in mind</p>
        </div>
        <form>
          <div className="names">
            <div className="firsts">
              <label className="label">Firstname</label>
              <input
                className="finputs"
                id="first_name"
                type="text"
                placeholder="Enter your first name"
              ></input>
            </div>
            <div className="details">
              <label className="label">Lastname</label>
              <input
                className="linputs"
                id="last_name"
                type="text"
                placeholder="Enter your last name"
              ></input>
            </div>
          </div>
          <div className="details">
            <label className="label">Email</label>
            <input
              id="email"
              type="email"
              placeholder="yourname@email.com"
            ></input>
          </div>
          <div className="details">
            <label className="label">Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>
          <div className="check">
            <input type="checkbox" placeholder="yourname@email.com"></input>
            <label>
              You agree to providing your data to Rodiyyah who may contact you.
            </label>
          </div>
          <button id="btn__submit" className="button" type="submit">
            Send Message
          </button>
        </form>
      </div>
      <div className="footerHead">
        <hr></hr>
        <div className="footer">
          <img className="footerzuri" src={zuriLogo} alt="zuri_logo"></img>
          <p className="footerContent">HNG Internship 9 Frontend Task</p>
          <img className="footeri4g" src={I4G} alt="I4G_logo"></img>
        </div>
      </div>
    </div>
  );
};
