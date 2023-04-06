import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Box, Stack, Typography, Avatar, Image, Link } from "@mui/material";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { pageStyle } from "../../assets/style";
import { profile, projects } from "../../assets/data";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, []);

  // useEffect(() => {
  //   const query_work = '*[_type == "works"]';
  //   const query = '*[_type == "personalinfo"]';

  //   client.fetch(query_work).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });

  //   client.fetch(query).then((data) => {
  //     setInfo(data);
  //   });
  //   console.log(works)
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  console.log(works);

  return (
    <>
      <Typography variant="h4" className="head-text">
        My Creative <span>Projects</span>{" "}
      </Typography>

      <Box className="app__work-filter">
        {["Front End", "Back End", "Full Stack", "UI/UX", "All"].map(
          (item, index) => (
            <Box
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </Box>
          )
        )}
      </Box>

      <motion.Box
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <Box className="app__work-item app__flex" key={index}>
            <Box className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.Box
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <Link href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.Box
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9], backgroundColor: "white" }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.Box>
                </Link>
                <Link href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.Box
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9], backgroundColor: "white" }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.Box>
                </Link>
              </motion.Box>
            </Box>

            <Box className="app__work-content app__flex">
              <Typography variant="h6" className="bold-text">{work.title}</Typography>
              <Typography variant="p" className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </Typography>

              <Box className="app__work-tag app__flex">
                {/* <p className="p-text">{work.tags[0]}</p> */}
                {/* <p>{work.tech[0]}</p> */}
              </Box>
            </Box>
          </Box>
        ))}
      </motion.Box>
      <Box className="link_button">
        <AiFillGithub className="githubicon" />
        <button className="github">
          <Link href={profile.github} target="_blank" rel="noreferrer">
            Check out GitHub Repository
          </Link>
        </button>
      </Box>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work");
