import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { images } from '../../constants';

import { BsTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
 
      <div className="container">
        <div className="left">
          <img src={images.businesscard}/>
        </div>
        <div className="right">
          <div className="top">
            <h1>Jonathan Kim</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className="divider" />
          <div className="middle">
            <div className="contactinfo_container">
              <p>JonathanKim980@gmail.com</p>
              <GrMail size={20}/>
            </div>
            <div className="contactinfo_container">
              <p>(737) 484 - 2504</p>
              <BsTelephoneFill size={20} />
            </div>
            <div className="contactinfo_container">
              <p>United States</p>
              <ImLocation size={20} />
            </div>
          </div>
          <div className="divider" />
          <div className="bottom">
            <div className="contactinfo_container">
              <p>github.com/jkim1998</p>
              <BsGithub size={20} />
            </div>
            <div className="contactinfo_container">
              <p>linkedin.com/in/jkim980</p>
              <BsLinkedin size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about"
);
