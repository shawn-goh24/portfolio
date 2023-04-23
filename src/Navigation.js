import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import logo from "./assets/logo.svg";
import React, { useState } from "react";
import "./navigation.css";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const navItems = ["ABOUT", "EXPERIENCE", "PROJECTS", "CONTACT"];

export default function Navigation(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClickScroll = (e) => {
    const element = document.getElementById(e.target.innerText);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shawn
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={handleClickScroll}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Container className="navbar" sx={{ display: "flex" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon sx={{ color: "#f5f5f7" }} />
        </IconButton>
        <Box display="flex" alignItems="center">
          <img
            src={logo}
            alt="logo"
            width="35px"
            style={{
              filter:
                "invert(100%) hue-rotate(86deg) brightness(118%) contrast(119%)",
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              color: "#f5f5f7",
            }}
          >
            <li className="navtext" onClick={handleClickScroll}>
              ABOUT
            </li>
            <li className="navtext" onClick={handleClickScroll}>
              EXPERIENCE
            </li>
            <li className="navtext" onClick={handleClickScroll}>
              PROJECTS
            </li>
            <li className="navtext" onClick={handleClickScroll}>
              CONTACT
            </li>
          </ul>
        </Box>
        {/* {CustomButton} */}
        <Button
          variant="outlined"
          onClick={() =>
            window.open("https://www.linkedin.com/in/shawngoh/", "_blank")
          }
          size="small"
        >
          Linkedin
        </Button>
      </Container>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

// const CustomButton = (
//   <button className="dark control">
//     <span className="backdrop"></span>
//     <span className="text">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           fillRule="evenodd"
//           d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
//           clipRule="evenodd"
//         />
//       </svg>
//       RESUME
//     </span>
//   </button>
// );
