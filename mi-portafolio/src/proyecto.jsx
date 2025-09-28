import React, { useState } from "react";
import { Box, Typography, Grid, Button, Chip } from "@mui/material";
import "./App.css"; // CSS con efectos 3D

// Array de proyectos
const proyectos = [
    {
        nombre: "Proyecto 1",
        imagen: "/img/proyecto1.png",
        descripcion: "Aplicación web para gestión de tareas.",
        tecnologias: ["React", "MUI", "Node.js"],
        demo: "#",
        codigo: "#",
    },
    {
        nombre: "Proyecto 2",
        imagen: "/img/proyecto2.png",
        descripcion: "Landing page moderna y responsive.",
        tecnologias: ["HTML", "CSS", "Bootstrap"],
        demo: "#",
        codigo: "#",
    },
    {
        nombre: "Proyecto 3",
        imagen: "/img/proyecto3.png",
        descripcion: "E-commerce con carrito de compras.",
        tecnologias: ["React", "Redux", "Firebase"],
        demo: "#",
        codigo: "#",
    },
    {
        nombre: "Proyecto 4",
        imagen: "/img/proyecto4.png",
        descripcion: "API REST para gestión de usuarios.",
        tecnologias: ["Node.js", "Express", "MongoDB"],
        demo: "#",
        codigo: "#",
    },
    {
        nombre: "Proyecto 5",
        imagen: "/img/proyecto5.png",
        descripcion: "Dashboard interactivo con gráficos.",
        tecnologias: ["React", "Chart.js", "MUI"],
        demo: "#",
        codigo: "#",
    },
    {
        nombre: "Proyecto 6",
        imagen: "/img/proyecto6.png",
        descripcion: "Blog personal con autenticación.",
        tecnologias: ["PHP", "MySQL", "Bootstrap"],
        demo: "#",
        codigo: "#",
    },
];


export default function Proyectos() {
  return (
    <Box
      sx={{
        borderRadius: 5,
        py: 8,
        px: { xs: 3, md: 6 },
        backgroundColor: "#0B0C10",
        color: "#fff",
        mt: 5,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          color: "#66FCF1",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Mis Proyectos
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {proyectos.map((proyecto, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            key={index}
          >
            <Box className="card-3d card-neon">
              <Box className="card-3d-inner">
                {/* Frente */}
                <Box className="card-3d-front">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                  />
                  <Typography variant="h6">{proyecto.nombre}</Typography>
                </Box>

                {/* Dorso */}
                <Box className="card-3d-back">
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {proyecto.descripcion}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    {proyecto.tecnologias.map((tec, i) => (
                      <Chip
                        key={i}
                        label={tec}
                        size="small"
                        sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }}
                      />
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    color="info"
                    href={proyecto.demo}
                    target="_blank"
                    sx={{ mr: 1 }}
                  >
                    Demo
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    href={proyecto.codigo}
                    target="_blank"
                  >
                    Código
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}