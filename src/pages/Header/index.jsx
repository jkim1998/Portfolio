import React, { useState } from "react";
import { profile } from "../../assets/data";
import { AiOutlineDown } from "react-icons/ai";
import { Box, Stack, Button, Typography, Link } from "@mui/material";
import { pageStyle } from "../../assets/style";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import { AppWrap, MotionWrap } from "../../wrapper";

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const tilt = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const customButton = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "15px",
  width: "200px",
  border: "1px solid white",
  color: "white",
  "&:hover": {
    backgroundColor: "rgb(250, 250, 250)",
    color: "black",
  },
  transition: "all 0.1s",
  // animation: `${tilt} 5s ease-in-out infinite`,
};

const Header = () => {
  const [hovering, setHovering] = useState(true);

  const handleMouseEnter = () => {
    setHovering(false);
  };

  const handleMouseLeave = () => {
    setHovering(true);
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        <Stack
          direction="row"
          sx={{
            textAlign: "flex end",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            Hello! My Name is &nbsp;
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "skyblue",
              borderBottom: "2px solid skyblue",
              paddingBottom: "0.5rem",
            }}
          >
            {profile.name}
          </Typography>
        </Stack>
        <Typography variant="h3" sx={{ color: "white" }}>
          I am a {profile.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Link sx={{ ...customButton }} href={profile.resume} target="_blank">
          My Resume
        </Link>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Link
            sx={{
              "&:hover svg": {
                fill: "skyblue",
              },
            }}
            href={profile.github}
            target="_blank"
          >
            <BsGithub fill="white" />
          </Link>
          <Link
            sx={{
              "&:hover svg": {
                fill: "skyblue",
              },
            }}
            href={profile.linkedin}
            target="_blank"
          >
            <FaLinkedinIn fill="white" />
          </Link>
        </Box>
        <Typography sx={{ color: "grey" }}>
          Copyright &copy; 2023 - Jonathan Kim - All rights Reserved
        </Typography>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            color: "skyblue",
            "&:hover": {
              color: "white",
            },
            animation: hovering ? `${jump} 0.7s infinite` : "none",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          View my work
          <AiOutlineDown fill="white" />
        </Button>
      </Box>
    </Stack>
  );
};
export default AppWrap(Header, "");
