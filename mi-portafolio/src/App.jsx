import React from "react";
import { Container } from "@mui/material";
import Nav from "./nav";        // tu navbar
import HeroCard from "./portada"; // tu portada inicial
import About from "./about";


export default function App() {
  return (
    <>
      {/* Navbar fijo arriba */}
      <Nav />

      {/* Portada inicial (card con imagen) */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <HeroCard />
        <About />
      </Container>
    </>
  );
}
