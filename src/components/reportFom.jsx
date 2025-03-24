import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ReportForm = () => {
  const { state } = useLocation();
  return (
    <>
      {state ? (
        <Box
          sx={{
            display: "contents",
            flexDirection: "column",
            padding: "20dvh",
           

          }}
        >
          <Typography
            component="h1"
            color="primary"
            variant="h1"
            sx={{ paddingBottom: "20px", fontSize: "30px" , textAlign:"center" }}
          >
            Nos complace informarle que su reserva ha sido agendada.
          </Typography>
          <Typography
            justifyContent="center"
            display="flex"
            paddingBottom="10px"
          >
            Recibirá un correo con toda la información de la cita generada.
          </Typography>
          <Typography
            justifyContent="center"
            display="flex"
            paddingBottom="10px"
          >
            Detalles del turno
          </Typography>
          <Box>
            <Card sx={{ minWidth: "100%", borderRadius: "40px" }}>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 55,
                    display: "flex",
                    justifyContent: "center",
                  }}
                  color="primary"
                  gutterBottom
                >
                  E007
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  CONSULTAS
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: "22px",textAlign:"center" }}
                >
                  junio 05, 2024 a las 11h30
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <span>
                    <strong>Agencia:</strong> Catamayo <strong>Ciudad:</strong>
                    Catamayo
                  </span>
                </Typography>
              </CardContent>
            </Card>
            <ul>
              <li>
                <Typography>
                  Te recomendamos estar 20 minutos antes de la hora de atención
                  para no perder tu turno.
                </Typography>
              </li>
              <li>
                <Typography>
                  Cuando tu turno aparezca en pantalla acércate al asesor
                  designado.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      ) : (
        <Navigate to="/"  />
      )}
    </>
  );
};
export default ReportForm;
