import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  Avatar,
  styled,
  Switch,
} from "@mui/material";
import { pageStyle } from "../../assets/style";
import { profile } from "../../assets/data";
import { Profile_pic } from "../../assets";
import { GrStackOverflow } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { frontend, backend, others } from "../../assets/data";
import { AppWrap, MotionWrap } from "../../wrapper";

const stackStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignItems: "flex-start",
  gap: "2rem",
  padding: "2rem",
};

const WhiteTextTypography = styled(Typography)({
  color: "white",
});

const About = () => {
  return (
    <Stack
      sx={{
        ...pageStyle,
        justifyContent: "space-between",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8rem",
        }}
      >
        <ProfileCard />
      </Stack>
      {/* <Services /> */}
      <Language />
    </Stack>
  );
};

const Services = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        // bgcolor: "#0F161C",
        width: "90%",
        borderRadius: "50px",
      }}
    >
      <ServiceCard
        service="Full Stack Development"
        icon={<GrStackOverflow fill="white" size="5rem" />}
      />
      <ServiceCard
        service="UI/UX"
        icon={<GiPencilBrush fill="white" size="5rem" />}
      />
      <ServiceCard
        service="Web Design"
        icon={<FaGlobe fill="white" size="5rem" />}
      />
      <ServiceCard
        service="Web Design"
        icon={<FaGlobe fill="white" size="5rem" />}
      />
    </Stack>
  );
};

const ServiceCard = ({ icon, service }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bgcolor: "#0F161C",
        width: "350px",
        height: "200px",
        marginY: "2rem",
        borderRadius: "1.5rem",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "-2.5rem",
          bgcolor: "skyblue",
          padding: "1rem",
          borderRadius: "50%",
        }}
      >
        {icon}
      </Stack>
      <WhiteTextTypography variant="h6" sx={{ color: "white" }}>
        {service}
      </WhiteTextTypography>
    </Stack>
  );
};

const ProfileCard = () => {
  const [profilemode, setProfilemode] = useState("frontend");

  const toggleProfile = () => {
    if (profilemode === "frontend") {
      setProfilemode("backend");
    } else {
      setProfilemode("frontend");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        width: "80%",
        maxWidth: "1200px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "0.3rem",
          height: "60%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bgcolor: "skyblue",
            padding: "50px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            bgcolor: "skyblue",
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
      <Box>
        <Switch
          checked={profilemode === "backend"}
          onChange={() => toggleProfile()}
        />{" "}
        {/* use the Switch component */}
        {profilemode === "frontend" ? (
          <Profile_frontend />
        ) : (
          <Profile_backend />
        )}
      </Box>
    </Box>
  );
};

const Profile_frontend = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#0F161C",
        padding: "2rem",
      }}
    >
      <Stack sx={{ paddingLeft: "2rem", color: "white" }}>
        <WhiteTextTypography>Personal Info</WhiteTextTypography>
        <WhiteTextTypography variant="h4">About Me</WhiteTextTypography>
        <Stack sx={{ paddingLeft: "2rem" }}>
          <WhiteTextTypography variant="h4">&nbsp;</WhiteTextTypography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "2rem",
            }}
          >
            <Stack sx={{ ...stackStyle }}>
              <WhiteTextTypography>name: </WhiteTextTypography>
              <WhiteTextTypography>title: </WhiteTextTypography>
              <WhiteTextTypography>email: </WhiteTextTypography>
              <WhiteTextTypography>phone: </WhiteTextTypography>
            </Stack>

            <Stack sx={{ ...stackStyle }}>
              <WhiteTextTypography>"{profile.name}" </WhiteTextTypography>
              <WhiteTextTypography>"{profile.title}"</WhiteTextTypography>
              <WhiteTextTypography>"{profile.email}" </WhiteTextTypography>
              <WhiteTextTypography>"{profile.phone}" </WhiteTextTypography>
            </Stack>
          </Stack>
          <WhiteTextTypography variant="h4">&nbsp;</WhiteTextTypography>
        </Stack>
        <WhiteTextTypography variant="h4">&nbsp;</WhiteTextTypography>
      </Stack>
    </Stack>
  );
};

const Profile_backend = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#0F161C",
        padding: "2rem",
      }}
    >
      <Stack sx={{ paddingLeft: "2rem", color: "white" }}>
        <WhiteTextTypography>Personal Info</WhiteTextTypography>
        <WhiteTextTypography variant="h4">
          const About_Me = [
        </WhiteTextTypography>
        <Stack sx={{ paddingLeft: "2rem" }}>
          <WhiteTextTypography variant="h4">{"{"}</WhiteTextTypography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "2rem",
            }}
          >
            <Stack sx={{ ...stackStyle }}>
              <WhiteTextTypography>name: </WhiteTextTypography>
              <WhiteTextTypography>title: </WhiteTextTypography>
              <WhiteTextTypography>email: </WhiteTextTypography>
              <WhiteTextTypography>phone: </WhiteTextTypography>
            </Stack>

            <Stack sx={{ ...stackStyle }}>
              <WhiteTextTypography>"{profile.name}" </WhiteTextTypography>
              <WhiteTextTypography>"{profile.title}"</WhiteTextTypography>
              <WhiteTextTypography>"{profile.email}" </WhiteTextTypography>
              <WhiteTextTypography>"{profile.phone}" </WhiteTextTypography>
            </Stack>
          </Stack>
          <WhiteTextTypography variant="h4">{"},"}</WhiteTextTypography>
        </Stack>
        <WhiteTextTypography variant="h4">{"];"}</WhiteTextTypography>
      </Stack>
    </Stack>
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
        width: "100%",
        paddingY: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Stack
        sx={{
          display: "flexbox",
          flexDireciton: "column",
          justifyContent: "center",
          alignItems: "center",
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
        <SkillsCard item={others} title="Others" />
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
            bgcolor: "#0F161C",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            borderRadius: "1.5rem",
          }}
        >
          <WhiteTextTypography sx={{ color: "white" }}>
            {title}
          </WhiteTextTypography>
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
                <WhiteTextTypography sx={{ color: "white" }}>
                  {skill.name}
                </WhiteTextTypography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__footer"), "about");
