import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../utils/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Netflix - MUI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
