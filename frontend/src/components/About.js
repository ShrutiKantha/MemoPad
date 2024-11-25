import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
     <div className="cardContainer">
     <h1 className="about-title">About This App</h1>
      <div className="textContainer">
      <p className="about-text">
        Welcome to the <span style={{fontWeight: '600'}}>MemoPad</span> App! This application is designed to help you
        organize your thoughts, keep track of tasks, and jot down ideas all in
        one place.
      </p>
      <p className="about-text">
        Built using the MERN stack (MongoDB, Express, React, Node.js), this app
        offers a seamless experience for creating, editing, and managing your
        notes. Whether you're planning your day or brainstorming for a project,
        we've got you covered.
      </p>
      <p className="about-text">
        Thank you for using the <span style={{fontWeight: '600'}}>MemoPad</span> App. Stay productive and inspired!
      </p>
      </div>
     </div>
    </div>
  );
};

export default About;
