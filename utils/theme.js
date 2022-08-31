import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#E50914",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red[400],
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
