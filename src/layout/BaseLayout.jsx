import React from "react";
import PropTypes from "prop-types";
import Header from "../components/headerForm";
import FooterForm from "../components/footerForm";
import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

const BaseLayout = (props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        marginBottom: "-100%",
      }}
    >
      <Box  sx={{height:"80px" ,display:"flex"}}>
        <Header />
      </Box>

      <Box
        sx={{
          background: "#FFFFFF",
          width: { xs: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" },
          margin: "auto",
          borderRadius: "30px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            padding: { xs: "19px", sm: "30px", md: "40px", lg: "50px" },
          }}
        >
          {<Outlet />}
        </Box>
      </Box>
      <Box>
        <FooterForm />
      </Box>
    </Box>
  );
};

BaseLayout.propTypes = {};

export default BaseLayout;
