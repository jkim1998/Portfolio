import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  Avatar,
  styled,
  Switch,
  Link,
  TextField,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiOutlineBold } from "react-icons/ai";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { profile } from "../../assets/data";
import { pageStyle } from "../../assets/style";
import { ThemeColors as qq } from "../../assets/theme";

const WhiteTextTypography = styled(Typography)({
  color: qq.font,
});

const ValidationTextField = styled(TextField)({
  "& .MuiFormLabel-root": {
    color: qq.accent,
  },
  "& .MuiInputBase-input": {
    color: qq.font,
  },
  "& .MuiInputBase-focused": {
    color: "red",
  },
  "& .MuiInputBase-root": {
    color: qq.font,
  },
  "& label.Mui-focused": {
    color: qq.accent,
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: qq.accent,
    },
  },
});

const Contact = () => {
  return (
    <Stack sx={{ ...pageStyle, position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <WhiteTextTypography variant="h3">Contact Me</WhiteTextTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTop: `1px solid ${qq.accent}`,
            width: "100rem",
            maxWidth: "80vw",
            paddingTop: "3rem",
          }}
        >
          <EmailForm />
          <ContactInfo />
        </Box>
      </Box>
    </Stack>
  );
};

const EmailForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    //prevent re-render
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_CONTACT_SERVICE,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_CONTACT_API
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("message sent");
          setStatus("SUCCESS");
        },
        (error) => {
          console.log(error.text);
          setStatus("FAILED");
        }
      );
  };
  // success message time out after certain time(3000)
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);

      document.getElementById("form").reset();
    } else {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
      }}
    >
      {status === "SUCCESS" && renderAlert_success()}
      {status === "FAILED" && renderAlert_fail()}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 50px 50px 50px",
        }}
      >
        <form ref={form} onSubmit={sendEmail} id="form">
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <ValidationTextField
              name="from_name"
              label="Your Name"
              variant="outlined"
              required
              sx={{
                bgcolor: qq.main,
              }}
            />
            <ValidationTextField
              name="user_email"
              label="Email"
              variant="outlined"
              required
              onInvalid={invalidEmail}
              sx={{ bgcolor: qq.main, color: qq.font }}
            />
            <ValidationTextField
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ bgcolor: qq.main, input: { color: qq.font } }}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: qq.accent, paddingY: "1rem" }}
              type="submit"
            >
              send
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

const ContactInfo = () => {
  const Label = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "3rem",
    marginY: "1rem",
    marginLeft: "4rem",
  };

  return (
    <Box
      sx={{
        height: "95%",
        display: "flex",
        flexDirection: "column",
        // paddingTop: "2rem",
        gap: "2rem",
        width: "40%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          paddingY: "1rem",
          bgcolor: qq.main,
        }}
      >
        <Box sx={{ ...Label }}>
          <BsFillPersonFill size="2rem" fill={qq.accent} />
          <WhiteTextTypography>{profile.name}</WhiteTextTypography>
        </Box>

        <Box sx={{ ...Label }}>
          <BsTelephoneFill size="2rem" fill={qq.accent} />
          <WhiteTextTypography>{profile.phone}</WhiteTextTypography>
        </Box>

        <Box sx={{ ...Label }}>
          <GrMail size="2rem" fill={qq.accent} />
          <WhiteTextTypography>{profile.email}</WhiteTextTypography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: qq.main,
          paddingTop: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
            borderTop: `2px solid ${qq.accent}`,
            padding: "30px",
          }}
        >
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.4)" },
            }}
          >
            <AiFillGithub size={40} id="github" fill={qq.font} />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.4)" },
            }}
          >
            <AiFillLinkedin size={40} id="linkedin" fill={qq.font} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const renderAlert_success = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      verticalAlign: "middle",
      paddingTop: "30px",
    }}
  >
    <WhiteTextTypography>Your message has been sent</WhiteTextTypography>
  </Box>
);

const renderAlert_fail = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      verticalAlign: "middle",
      paddingTop: "30px",
    }}
  >
    <WhiteTextTypography>Error. Please try again later</WhiteTextTypography>
  </Box>
);

const invalidEmail = () => {
  <Box>
    <WhiteTextTypography>this is required</WhiteTextTypography>
  </Box>;
};

export default AppWrap(MotionWrap(Contact, "app__footer"), "contact");
