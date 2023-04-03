import { AppWrap, MotionWrap } from "../../wrapper";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import { frontend, backend } from "../../assets/data";
import { pageStyle } from "../../assets/style";

const Skills = () => {
  return (
    <Box sx={{ ...pageStyle }}>
      <Stack
        sx={{
          display: "flexbox",
          flexDireciton: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Typography>Skills</Typography>
      </Stack>
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
    </Box>
  );
};

const SkillsCard = ({ title, item }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Stack
          sx={{
            bgcolor: "rgb(250, 250, 250)",
            padding: "50px",
            borderRadius: "25px",
            height: "100%",
            boxShadow: "10px 5px 5px rgb(228, 215, 215)",
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

export default Skills;
