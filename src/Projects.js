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
import GitHubIcon from "@mui/icons-material/GitHub";

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
            image="https://thumbs.dreamstime.com/b/chalk-drawing-light-bulbs-filling-message-work-progress-four-slowly-171456439.jpg"
          />
          <CardContent sx={{ height: "125px", backgroundColor: "#d9d9d9" }}>
            <Typography gutterBottom variant="h6" component="div">
              Upcoming...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Currently planning in progress <br />
              Follow github link to check on progress <br /> <br /> Techs:
              React, Express.js, SQL
            </Typography>
          </CardContent>
          <CardActions sx={{ backgroundColor: "#d9d9d9" }}>
            <IconButton disabled>
              <GitHubIcon />
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
