import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ReactTooltip from 'react-tooltip';
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);

  useEffect(() => {
    const frontendQuery = '*[_type == "frontend"]';
    const backendQuery = '*[_type == "backend"]';

    client.fetch(frontendQuery).then((data) => {
      setFrontend(data);
    });

    client.fetch(backendQuery).then((data) => {
      setBackend(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills</h2>
      <div className="sections">
        <div className="app__skills-container">
          <h1>Front End</h1>
          <motion.div className="app__skills-list">
            {frontend.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="app__skills-container">
          <h1>Back End</h1>
          <motion.div className="app__skills-list">
            {backend.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
