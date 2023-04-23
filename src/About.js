import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import me from "./assets/me.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navigation(props) {
  return (
    <Container
      id="ABOUT"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "40px" },
          fontWeight: "bold",
          margin: "40px 0px",
        }}
      >
        ABOUT ME
      </Typography>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "flex" },
          textAlign: { xs: "center", sm: "center", md: "center" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{
            width: { xs: "100%", sm: "100%", md: "60" },
            mr: { xs: "0px", sm: "0px", md: "130px" },
            mb: { sx: "40px", sm: "40px", md: "0px" },
          }}
        >
          <Typography
            sx={{
              color: "#64ABFF",
              mb: "15px",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            Hi there! Glad to have you here
          </Typography>
          <Box>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              Welcome to my very first portfolio that I created myself. I'm
              Shawn from Singapore, and I spent around 2.5 years working for
              Dyson as a test development engineer. Only in 2021 I've begun to
              get more intereted in coding due to my work, which is why I'm
              currently enrolled in a full-stack development bootcamp by Rocket
              Academy.
            </Typography>
            <br />
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              In light of that, I kind of took a leap of faith and quit my job
              at Dyson to pursue this course. And with this, I'm moving closer
              to obtaining a position as a software developer or engineer
            </Typography>
            <br />
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              And this is where I'll start my journey...
            </Typography>
          </Box>
          <Box>
            <IconButton
              onClick={() =>
                window.open("https://github.com/shawn-goh24", "_blank")
              }
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/shawngoh/", "_blank")
              }
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
        <img src={me} alt="me" />
      </Box>
    </Container>
  );
}
