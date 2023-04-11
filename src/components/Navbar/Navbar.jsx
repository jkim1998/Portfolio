import React, { useState } from "react";
import { ThemeColors } from "../../assets/theme";
import {
  Box,
  Stack,
  Button,
  Typography,
  Link,
  Avatar,
  List,
  IconButton,
  Drawer,
} from "@mui/material";
import { Logo_dark, Logo_light } from "../../assets";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const res950 = useMediaQuery("(min-width:950px)");

  const toggleDrawer =
    (isOpen = !isDrawerOpen) =>
    () => {
      setIsDrawerOpen(isOpen);
    };

  const menuItems = ["home", "about", "work", "contact"].map((item) => (
    <List key={`link-${item}`}>
      <Link
        onClick={toggleDrawer(false)}
        href={`#${item}`}
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          textTransform: "capitalize",
          "&:hover": {
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
  ));

  return (
    <>
      <Box sx={{ paddingRight: "16px" }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            width: "calc(100vw - 16px)",
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

          {res950 ? (
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "5rem",
                marginRight: "2rem",
              }}
            >
              {menuItems}
            </List>
          ) : (
            <IconButton
              sx={{ color: "white" }}
              onClick={toggleDrawer()}
              aria-label="menu"
            >
              <AiOutlineMenu />
            </IconButton>
          )}

          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer()}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "2rem",
                height: "100vh",
                // width: "200px",
                bgcolor: ThemeColors.main,
              }}
            >
              {menuItems}
            </Box>
          </Drawer>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
