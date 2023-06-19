import { Box, Typography } from "@mui/material";
import React from "react";
import ParticlesBg from "particles-bg";
import "./hero.css";

export default function Hero(props) {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#1D1D1F",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ParticlesBg
        color="#f5f5f7"
        num={50}
        type="cobweb"
        bg={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
        }}
      />
      <Box
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "44px", sm: "74px" }, m: { xs: -3, sm: -4 } }}
          >
            HI, I'M
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "54px", sm: "86px" },
              fontWeight: "bold",
              color: "#64ABFF",
            }}
          >
            SHAWN GOH
          </Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: "18", sm: "24px" } }}>
          <span style={{ color: "#64ABFF" }}>Full-stack</span> developer
        </Typography>
      </Box>
      <div
        className="scroll-down"
        onClick={(e) => {
          const element = document.getElementById("ABOUT");
          if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      ></div>
    </Box>
  );
}
