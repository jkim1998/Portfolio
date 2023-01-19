import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFileDownload } from "react-icons/fa";
// import './ContactInfo.scss';

const ContactInfo = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/jkim1998" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/jkim980/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1Q_tkY_V-6K9VqElXo2xo__Q_jVcb-ath/view?usp=sharing" target="_blank" rel="noreferrer"><FaFileDownload /></a>
    </div>
  </div>
);

export default ContactInfo;