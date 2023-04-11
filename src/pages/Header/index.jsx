import React, { useState } from "react";
import { profile } from "../../assets/data";
import { AiOutlineDown } from "react-icons/ai";
import {
  Box,
  Stack,
  Button,
  Typography,
  Link,
  useMediaQuery,
} from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import { AppWrap } from "../../wrapper";

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
  const res700 = useMediaQuery("(min-width:500px)");
  const res800 = useMediaQuery("(min-width:800px)");
  const res900 = useMediaQuery("(min-width:900px)");
  const res950 = useMediaQuery("(min-width:950px)");

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
        width: "100%",
        textAlign: "center",
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
          direction={res900 ? "row" : "column"}
          sx={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {res900 && (
            <Typography variant="h2" sx={{ color: "white" }}>
              Hello! My Name is &nbsp;
            </Typography>
          )}
          <Typography
            variant={res900 ? "h2" : "h3"}
            sx={{
              color: "skyblue",
              borderBottom: "2px solid skyblue",
              paddingBottom: "0.5rem",
            }}
          >
            {profile.name}
          </Typography>
        </Stack>

        {res900 && (
          <Typography variant={res900 ? "h4" : "h3"} sx={{ color: "white" }}>
            I am a {profile.title}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Link
          sx={{ ...customButton, textDecoration: "none" }}
          href={profile.resume}
          target="_blank"
        >
          My Resume
        </Link>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0%",
          left: "50%",
          width: "100%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {res800 && (
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
        )}
        {res950 && (
          <Typography sx={{ color: "grey", width: "100%" }}>
            Copyright &copy; 2023 - Jonathan Kim - All rights Reserved
          </Typography>
        )}
        {res700 && (
          <Link href="#about" sx={{textDecoration: "none"}}>
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                color: "skyblue",
                "&:hover": {
                  color: "white",
                },
                animation:
                  res800 && hovering ? `${jump} 0.7s infinite` : "none",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              View my work
              <AiOutlineDown fill="white" />
            </Button>
          </Link>
        )}
      </Box>
    </Stack>
  );
};
export default AppWrap(Header, "home");
