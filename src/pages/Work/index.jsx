import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Link,
  Button,
  useMediaQuery,
} from "@mui/material";
import { AppWrap } from "../../wrapper";
import { profile, projects, Tags } from "../../assets/data";
import { ThemeColors } from "../../assets/theme";

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const res500 = useMediaQuery("(min-width:500px)");

  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, []);
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100%",
        width: "100%",
        flex: 1,
      }}
    >
      <TagFilter
        handleWorkFilter={handleWorkFilter}
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <ProjectGrid filterWork={filterWork} />
      <Footer/>
    </Box>
  );
};

const TagFilter = ({ handleWorkFilter, activeFilter, setActiveFilter }) => {
  return (
    <>
      <Stack direction="row">
        <Typography variant="h4" sx={{ color: "white" }}>
          Sample &nbsp;
        </Typography>
        <Typography variant="h4" sx={{ color: ThemeColors.accent }}>
          Projects
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "4rem 0 2rem",
        }}
      >
        {Tags.map((item, index) => (
          <Box
            key={index}
            onClick={() => handleWorkFilter(item)}
            sx={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              backgroundColor:
                activeFilter === item ? ThemeColors.accent : "#fff",
              color: activeFilter === item ? ThemeColors.Main : "#000",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.3s ease",
              margin: "0.5rem",
              "&:hover": {
                backgroundColor: ThemeColors.accent,
                color: "#fff",
              },
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </>
  );
};

const ProjectGrid = ({ filterWork }) => {
  const [hovered, setHovered] = useState(Array(filterWork.length).fill(false));

  const handleMouseEnter = (index) => {
    setHovered(hovered.map((value, i) => i === index));
  };

  const handleMouseLeave = (index) => {
    setHovered(hovered.map((value, i) => false));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,300px)",
        justifyContent: "center",
        gridGap: "1rem",
        width: "100%",
      }}
    >
      {filterWork.map((work, index) => (
        <Box
          sx={{
            width: "270px",
            height: "350px",
            flexDirection: "column",
            marginY: "2rem",
            padding: "1rem",
            borderRadius: "0.5rem",
            bgcolor: "#fff",
            color: "#000",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
            },
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              height: "230px",
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "0.5rem",
                objectFit: "cover",
              }}
              src={work.imgUrl}
              alt={work.name}
            />
            <Overlay work={work} hovered={hovered[index]} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              padding: "0.5rem",
              width: "100%",
            }}
          >
            <Typography variant="h6">{work.title}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              padding: "0.5rem",
            }}
          >
            <Typography variant="p" style={{ marginTop: 10 }}>
              {work.description}
            </Typography>
          </Box>
          <Box>{/* <p>{work.tech[0]}</p> */}</Box>
        </Box>
      ))}
    </Box>
  );
};
const Overlay = ({ work, hovered, handleMouseEnter, handleMouseLeave }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        borderRadius: "0.5rem",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={work.projectLink}
        target="_blank"
        rel="noreferrer"
        sx={{
          transition: "transform 0.3s ease, color 0.3s ease",
          "&:hover": {
            transform: "scale(1.4)",
          },
        }}
      >
        <AiFillEye size="2rem" fill={ThemeColors.font} />
      </Link>
      <Link
        href={work.codeLink}
        target="_blank"
        rel="noreferrer"
        sx={{
          transition: "transform 0.3s ease, color 0.3s ease",
          "&:hover": {
            transform: "scale(1.4)",
          },
        }}
      >
        <AiFillGithub size="2rem" fill={ThemeColors.font} />
      </Link>
    </Box>
  );
};

const Footer = ({ res500 }) => {
  return (
    <>
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: res500 && "absolute",
          bottom: res500 && 0,
          bgcolor: ThemeColors.thrid,
          borderRadius: "0.5rem",
          padding: "0.5rem",
          gap: "1rem",
          "&:hover": {
            backgroundColor: ThemeColors.accent,
          },
        }}
      >
        <AiFillGithub fill={ThemeColors.font} size="2rem" />
        <Link
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none", color: ThemeColors.font }}
        >
          Check out GitHub Repository
        </Link>
      </Button>
    </>
  );
};

export default AppWrap(Work, "work");
