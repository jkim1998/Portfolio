import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AiFillGithub, AiFillLinkedin, AiOutlineBold, AiOutlineDown } from "react-icons/ai";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { FaFileDownload } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import "./Header.scss";

const Header = () => {
  const [abouts, setAbouts] = useState([]);
  const style = { color: "white", fontsize: "1.5em" };

  useEffect(() => {
    const query = '*[_type == "home"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <div className="content">
        <div className="banner_introduction">
          <div className="left">
            <div className="introduction">
              <h4>Hello there! </h4>
              <p>
                I am <span>Jonathan Kim,</span>
              </p>
              <h5>A Full Stack Developer</h5>
              {/* <div className="social">
                <a
                  href="https://github.com/jkim1998"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={40} id="github" />github.com/jkim1998
                </a>
                <a
                  href="https://www.linkedin.com/in/jkim980/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size={40} id="linkedin" />linkedin.com/in/jkim980
                </a>
              </div> */}
            </div>
            <div className="downloads">
              <button id="resume">
                <a
                  href="https://docs.google.com/document/d/1Fgen3_VVCRwg_rAdSjEKvbnTO0Eh8rC5kGcb7q-MqiI/edit#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFileDownload size={20} /> Download CV
                </a>
              </button>
              <button id="contacts">
                <a href="#contact">
                  <MdContactMail size={20} />
                  Contact Me
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img src={images.profile} />
          </div>
        </div>
        {/* <div className="bottom">
          <p>My Services</p>
          <div className="app__profiles">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__profile-item"
                key={about.title + index}
              >
                <div className="services">
                  <img src={urlFor(about.imgUrl)} alt={about.title} />
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                    {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                    {about.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
        <a href="/#about" className="nextpage">
          <AiOutlineDown />
        </a>
      </div>
    </>
  );
};
export default AppWrap(Header, "home", "app__whitebg");
