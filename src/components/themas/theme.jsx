import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006BB5",
    },
    secondary: {
      main: "#FDDE09",
    },
  },
  typography: {
    fontFamily: ["Space Grotesk"],
  },
  spacing: 8, 
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: "#F7F7F7" ,
          

          
        },
      },
    },
   
  },
});

export default theme;
