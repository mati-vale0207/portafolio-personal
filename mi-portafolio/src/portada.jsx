import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './App.css';
import portada from './img/1.jpg';

export default function HeroCard() {
  return (
    <Card
      sx={{
        position: "relative",
        height: { xs: 300, sm: 400, md: 500 },
        borderRadius: 4,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        boxShadow: 5,
        mb: 4,
      }}
    >
      {/* Fondo animado */}
      <Box
        className="bg-animated"
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${portada})`,
        }}
      />

      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.55)",
          zIndex: 2,
        }}
      />



      {/* Contenido centrado */}
      <CardContent sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}
        >
          Desarrollador Full Stack
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
        >
          Bienvenido a mi Universo digital 🌌
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#609d99ff",
            color: "#0B0C10",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#4c6967ff" },
          }}
        >
          Contáctame
        </Button>
      </CardContent>
    </Card>
  );
}
