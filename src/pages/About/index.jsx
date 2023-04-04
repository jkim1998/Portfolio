import React from "react";
import { Box, Stack, Button, Typography, Link, Avatar } from "@mui/material";
import { pageStyle } from "../../assets/style";
import { profile } from "../../assets/data";
import { Profile_pic } from "../../assets";
import { GrStackOverflow } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { frontend, backend } from "../../assets/data";

const stackStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignItems: "flex-start",
  gap: "2rem",
  padding: "2rem",
  bgcolor: "yellow",
};

const About = () => {
  return (
    <Stack
      sx={{
        ...pageStyle,
        gap: "5rem",
      }}
    >
      <ProfileCard />
      <Language />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          gap: "2rem",
          bgcolor: "skyblue",
          width: "100%",
        }}
      >
        <Cards service="Full Stack Development" icon={<GrStackOverflow />} />
        <Cards service="UI/UX" icon={<GiPencilBrush />} />
        <Cards service="Web Design" icon={<FaGlobe />} />
      </Stack>
    </Stack>
  );
};

const Cards = ({ icon, service }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "white",
        width: "400px",
        height: "200px",
        marginY: "2rem",
      }}
    >
      {icon}
      <Typography variant="h6">{service}</Typography>
    </Stack>
  );
};

const ProfileCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        width: "80%",
        bgcolor: "green",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "0.5rem",
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bgcolor: "blue",
            padding: "50px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            bgcolor: "red",
            padding: "50px",
          }}
        />
        <Avatar
          src={Profile_pic}
          variant="square"
          sx={{
            height: "100%",
            width: "auto",
          }}
        />
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "purple",
        }}
      >
        <Typography>Personal Info</Typography>
        <Typography variant="h4">About Me</Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Stack sx={{ ...stackStyle }}>
            <Typography>Name: </Typography>
            <Typography>Title: </Typography>
            <Typography>Email: </Typography>
            <Typography>Phone: </Typography>
          </Stack>

          <Stack sx={{ ...stackStyle }}>
            <Typography>{profile.name} </Typography>
            <Typography>{profile.title} </Typography>
            <Typography>{profile.email} </Typography>
            <Typography>{profile.phone} </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const Language = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10rem",
        bgcolor: "red",
        width: "90%",
      }}
    >
      <Stack
        sx={{
          display: "flexbox",
          flexDireciton: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      ></Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
        }}
      >
        <SkillsCard item={frontend} title="Front End" />
        <SkillsCard item={backend} title="Back End" />
      </Box>
    </Stack>
  );
};

const SkillsCard = ({ title, item }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Stack
          sx={{
            bgcolor: "rgb(250, 250, 250)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{title}</Typography>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.map((skill) => (
              <Stack
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                sx={{
                  flexDirection: "column",
                  textAlign: "center",
                  margin: "1rem",
                  transition: "all 0.3s ease-in-out",
                }}
                key={skill.name}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "white",
                    borderRadius: "50%",
                    width: "90px",
                    height: "90px",
                  }}
                >
                  <Avatar variant="square" src={skill.icon} alt={skill.name} />
                </Stack>
                <Typography>{skill.name}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default About;
