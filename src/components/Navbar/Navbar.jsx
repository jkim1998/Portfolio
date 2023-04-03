import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
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
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "red",
        paddingY: "0.5rem",
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
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <Box />
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </List>

      <Box>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <Box
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "skills", "work", "contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default Navbar;
