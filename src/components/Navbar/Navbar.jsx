import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { ThemeColors } from "../../assets/theme";
import {
  Box,
  Stack,
  Button,
  Typography,
  Link,
  Avatar,
  List,
} from "@mui/material";
import { Logo_dark, Logo_light } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: "0.5rem",
        position: "fixed",
        width: "99%",
        bgcolor: "#0F161C",
        zIndex: "100",
      }}
    >
      <Link
        href="/"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Avatar
          variant="square"
          src={Logo_light}
          alt="logo"
          sx={{
            width: "100%",
          }}
        />
      </Link>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        {["home", "about", "work", "contact"].map((item) => (
          <List key={`link-${item}`}>
            <Link
              href={`#${item}`}
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  textDecoration: "none",
                  color: "skyblue",
                },
              }}
            >
              {item}
              <Box
                sx={{
                  bgcolor: "white",
                  marginTop: "0.5rem",
                  width: "60%",
                  height: "1px",
                }}
              ></Box>
            </Link>
          </List>
        ))}
      </List>

      <Box>{toggle && <></>}</Box>
    </Stack>
  );
};

export default Navbar;
