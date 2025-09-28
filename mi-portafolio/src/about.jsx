import React from "react";
import { Box, Typography, Avatar, Grid, Chip } from "@mui/material";
import "./App.css";
import stardust from "./img/stardust.png";

export default function About() {
    return (

        <Box
            sx={{
                position: "relative",
                minHeight: { xs: 500, md: 400 },
                px: { xs: 3, md: 6 },
                py: { xs: 6, md: 8 },
                color: "white",
                overflow: "hidden",
                backgroundColor: "#050607ff", // fondo base oscuro
                zIndex: "1",
                border: "3px solid #945ea1ff",
                borderRadius: "20px",
            }}
        >

            {/*fondo estrellas*/}
            <Box
                className="stars-bg"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "200%",
                    height: "200%",
                    background: `url(${stardust}) repeat`,
                }}
            />

            <Box
                className="stars-bg-fast"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "200%",
                    height: "200%",
                    background: `url(${stardust}) repeat`,

                }}
            />

            {/* Contenido principal */}
            <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
                {/* Avatar / Foto */}
                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                    <Box className="avatar-orbit">
                    <Avatar
                        alt="Mi Foto"
                        src="./assets/images/mi-foto.jpg" // tu foto aquí
                        sx={{
                            width: { xs: 150, md: 180 },
                            height: { xs: 150, md: 180 },
                            mx: "auto",
                            boxShadow: 5,
                            border: "3px solid #66FCF1",
                        }}
                    />
                    <Box className="comet" /> {/*el cometa que gira*/}
                    </Box>
                </Grid>

                {/* Texto descriptivo */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" sx={{ color: "#66FCF1", fontWeight: "bold", mb: 2 }}>
                        Sobre mí
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mb: 2, lineHeight: 1.6, fontSize: { xs: "0.95rem", md: "1.1rem" } }}
                    >
                        Soy desarrollador Full Stack, apasionado por crear experiencias digitales inmersivas.
                        Me encanta combinar diseño y código para interfaces modernas y funcionales. Disfruto trabajar en proyectos
                        donde puedo unir creatividad, código y diseño, creando interfaces atractivas y fáciles de usar. Además, estoy
                        en constante aprendizaje para mantenerme al día con las últimas tendencias en desarrollo.
                    </Typography>
                    {/* Habilidades - Lenguajes y frameworks */}
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 1, color: "#66FCF1" }}>Lenguajes y Frameworks</Typography>
                        <Chip label="HTML" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="CSS" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="Bootstrap" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="MUI" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="JavaScript" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="React" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="PHP" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="SQL" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                    </Box>

                    {/* Herramientas y diseño */}
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h6" sx={{ mb: 1, color: "#66FCF1" }}>Herramientas y Diseño</Typography>
                        <Chip label="Balsamiq" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="Figma" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="Canvas" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="Lucidchart" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="Git" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="GitHub" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                        <Chip label="Vite" sx={{ mr: 1, mb: 1, bgcolor: "#45A29E", color: "#0B0C10" }} />
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
}
