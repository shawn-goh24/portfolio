import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Contact(props) {
  return (
    <Box
      id="CONTACT"
      sx={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8F2FF",
        paddingTop: "75px",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            fontSize: { xs: "30px", sm: "40px" },
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          CONTACT
        </Box>
        <Typography
          variant="subtitle"
          sx={{ fontSize: { xs: "14px", sm: "18px" }, color: "#8d8d8d" }}
        >
          Get in touch
        </Typography>
        <Typography
          sx={{
            width: { xs: "90%", sm: "60%" },
            textAlign: "center",
            pt: "20px",
            fontSize: { xs: "14px", sm: "18px" },
          }}
        >
          My email is always available! Whether you want to say hello, have
          questions, or have possibilities for me. Please email me! I'll try to
          respond to you as soon as possible!
        </Typography>
        <a href="mailto: shawn_gzl@hotmail.com">
          <Button variant="outlined" sx={{ mt: "60px" }}>
            Say Hello!
          </Button>
        </a>
      </Box>
    </Box>
  );
}
