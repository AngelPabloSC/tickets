import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../assets/image/CatamayoBaner.jpg";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        background: "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        alignItems:"center",
        display:"flex",
        justifyContent:"center"
        
      }}
    >
      <Navbar bg="#333" variant="light">
        <Box display="flex" justifyContent="center">
          <img src={Logo} alt="Logo" width={200} />
        </Box>
      </Navbar>
    </Box>
  );
};

export default Header;
