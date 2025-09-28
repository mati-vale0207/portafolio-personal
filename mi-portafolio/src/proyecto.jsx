import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import './App.css'; // CSS para efectos 3D

//array para proyectos
const proyectos = [
    {
        nombre: "Proyecto 1",
        descripcion: "",
        link: "#",
        codigo: "#"
    },
    {
        nombre: "Proyecto 2",
        descripcion: "",
        link: "#",
        codigo: "#"
    },
];


export default function Proyecto() {
    return (
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, backgroundColor: "#0B0C10", color: "#fff" }}>
            <Typography variant="h4" sx={{ mb: 5, color: "#66FCF1", fontWeight: "bold", textAlign: "center" }}>
                Mis Proyectos
            </Typography>


            <Grid container spacing={4} justifyContent="center">
                {proyectos.map((proyecto, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box className="card-3d">
                            <Box className="card-3d-inner">

                                {/*PARTE FRONTAL*/}
                                <Box className="card-3d-front">
                                    <Typography variant="h6" sx={{ mb: 2 }}>{proyecto.nombre}</Typography>
                                    <Button variant="contained" color="info">Ver Proyecto</Button>
                                </Box>

                                {/*parte trasera*/}
                                <Box className="card-3d-back">
                                    <Typography variant="body1" sx={{ mb: 2 }}>{proyecto.descripcion}</Typography>
                                    <Button variant="outlined" color="secondary" href={proyecto.codigo}>Ver Codigo</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}