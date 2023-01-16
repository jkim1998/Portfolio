import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => (
  <div className="test">
    <div className="test1">
      <div className="test5">
        <div className="test2">
          <p>Hello, </p>
          <p>
            I am <span>Jonathan Kim</span>
          </p>
        </div>
        <div className="test3">
          <button><a href="https://docs.google.com/document/d/1Fgen3_VVCRwg_rAdSjEKvbnTO0Eh8rC5kGcb7q-MqiI/edit#" target="_blank" rel="noreferrer">Download CV</a></button>
          <button><a href="#contact">Contact Me</a></button>
        </div>
      </div>
      <div className="test6">
        <img src={images.profile}/>
      </div>
    </div>
    <div className="test4">
      <p>web development</p>
      <p>UI/UX</p>
      <p>skill3</p>
    </div>
  </div>
);

export default AppWrap(Header, "home", "app__primarybg");
