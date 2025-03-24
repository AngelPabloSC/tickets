import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  CircularProgress,
  Alert,
  Typography,
  Grid,
  Stack,
  Box,
  Link,
} from "@mui/material";
import { useFetchData } from "../hooks/useFetchData";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FooterForm = () => {
  const {
    fetchData: { data, loading, code, message },
  } = useFetchData({ endPoint: "getEntity" });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#0166B1",
          marginTop: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "16px",
          "@media (min-width:600px)": {
            height: "15%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "8px 32px",
          },
        }}
      >
        {!loading ? (
          code === "COD_OK" ? (
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="body1" color="#fff">
                    Powered by:
                  </Typography >
                  <img
                    src={data.info.image}
                    alt="Logo"
                    style={{
                      padding: "5px",
                      height: "40px",
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography align="center" color="#fff">
                  CACC – 2024. Todos los derechos reservados
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container direction="column" alignItems="center">
                  <Typography color="#fff">Telefono: (07) 267-7195</Typography>
                  <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                    <Typography color="#fff">Síguenos en:</Typography>
                    <Link href="https://www.facebook.com/p/Cooperativa-de-ahorro-y-cr%C3%A9dito-Catamayo-Ltda-100068590352576/">
                      <FacebookIcon htmlColor="#fff" />
                    </Link>
                    <Link href="https://api.whatsapp.com/send/?phone=593984216162&text&type=phone_number&app_absent=0">
                      <WhatsAppIcon htmlColor="#fff" />
                    </Link>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Alert severity="error">{message}</Alert>
          )
        ) : (
          <CircularProgress />
        )}
      </Box>
    </>
  );
};

export default FooterForm;
