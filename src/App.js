import "./App.css";
import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

function App() {
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{ textAlign: "center", fontSize: "14px" }}>
        © This website was built by me 😊
      </footer>
      <Zoom in={trigger}>
        <Box
          role="presentation"
          // Place the button in the bottom right corner.
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1,
          }}
        >
          <Fab
            onClick={scrollToTop}
            color="primary"
            size="small"
            aria-label="Scroll back to top"
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    </div>
  );
}

export default App;
