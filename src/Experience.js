import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Experience(props) {
  return (
    <Container
      id="EXPERIENCE"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
        // backgroundColor: "#f5f5f7",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "40px" },
          fontWeight: "bold",
          margin: "40px 0px",
        }}
      >
        WHERE I'VE WORKED
      </Typography>
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            fontSize: "22px",
            marginRight: "65px",
            color: "#64ABFF",
            display: { xs: "none" },
          }}
        >
          Dyson
        </Typography>
        <Box
          mr="130px"
          sx={{
            mr: { sm: "0px", md: "130px" },
            width: {
              sm: "300px",
              md: "570px",
            },
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "22px" } }}
          >
            Test Development Engineer @{" "}
            <span style={{ color: "#64ABFF" }}>Dyson</span>
          </Typography>
          <Typography
            sx={{
              color: "#8d8d8d",
              mb: "15px",
              fontSize: { xs: "11px", sm: "16px" },
            }}
          >
            Sept 2020 - May 2023
          </Typography>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <ul style={{ display: "block", listStyleType: "inherit" }}>
              <li
                className="list"
                style={{
                  padding: "5px 0px",
                }}
              >
                Built an Optical Character Recognition (OCR) GUI to automate the
                reading of values on Dyson’s product UI and analyze with respect
                to the sensor’s reading within the product by using LabVIEW
              </li>
              <li
                className="list"
                style={{
                  padding: "5px 0px",
                }}
              >
                Optimize Dyson’s air purifier test setup to prove evenness of
                sensor reading across all machines within the chamber, and
                conduct Measurement System Analysis (MSA) to prove repeatability
                and reproducibility for the test method{" "}
              </li>
              <li
                className="list"
                style={{
                  padding: "5px 0px",
                }}
              >
                Improve time to data process and report generating process by
                66% by integrating all processes into one by using MATLAB GUI{" "}
              </li>
              <li
                className="list"
                style={{
                  padding: "5px 0px",
                }}
              >
                Developed test methods, setups, and GUI for UR robotic arm to
                automate work tasks based on product requirements, and conduct
                MSA study by using Python (Tkinter)
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
