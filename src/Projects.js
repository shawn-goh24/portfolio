import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import gowhere from "./assets/gowhere.png";
import kaching from "./assets/kaching.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Projects(props) {
  return (
    <Box
      id="PROJECTS"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingBottom: "70px",
        paddingTop: "70px",
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "30px", sm: "40px" },
          fontWeight: "bold",
          marginTop: "40px",
        }}
      >
        PROJECTS
      </Box>
      <Typography
        variant="subtitle"
        sx={{
          fontSize: { xs: "14px", sm: "18px" },
          color: "#8d8d8d",
          textAlign: "center",
        }}
      >
        Things that I have done during Rocket Academy Bootcamp
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Card
          elevation={8}
          sx={{
            height: 450,
            width: 345,
            margin: { xs: "10px 0px", sm: "40px" },
          }}
        >
          <CardMedia
            component="img"
            alt="gowhere"
            height="240"
            image={gowhere}
          />
          <CardContent sx={{ height: "125px", backgroundColor: "#d9d9d9" }}>
            <Typography gutterBottom variant="h6" component="div">
              goWhere - Travel Planner
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Allow users to plan trips <br />
              <br /> Techs: React, MUI, Firebase, Maps API, EmailJs, Unsplash
              API
            </Typography>
          </CardContent>
          <CardActions sx={{ backgroundColor: "#d9d9d9" }}>
            <IconButton
              onClick={() =>
                window.open("https://github.com/shawn-goh24/goWhere", "_blank")
              }
            >
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={8}
          sx={{
            height: 450,
            width: 345,
            margin: { xs: "10px 0px", sm: "40px" },
          }}
        >
          <CardMedia
            component="img"
            alt="gowhere"
            height="240"
            image={kaching}
          />
          <CardContent sx={{ height: "125px", backgroundColor: "#d9d9d9" }}>
            <Typography gutterBottom variant="h6" component="div">
              Kaching - Personal Finance Web App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To track monthly expenses and budgets
              <br /> <br /> Techs: React.js, Node.js, Express.js, PostgreSQL
            </Typography>
          </CardContent>
          <CardActions sx={{ backgroundColor: "#d9d9d9" }}>
            <IconButton>
              <GitHubIcon
                onClick={() =>
                  window.open(
                    "https://github.com/shawn-goh24/kaching-frontend",
                    "_blank"
                  )
                }
              />
            </IconButton>
            <IconButton>
              <LaunchIcon
                onClick={() =>
                  window.open("https://kaching-frontend.vercel.app/", "_blank")
                }
              />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Typography
        variant="subtitle"
        sx={{ fontSize: { xs: "12px", sm: "16px" } }}
      >
        Stay tune for more...
      </Typography>
    </Box>
  );
}
