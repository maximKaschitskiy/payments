import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={session}>
          <CssBaseline />
          <Component {...pageProps} />
      </SessionProvider>
    </CacheProvider>
  );
}
export default MyApp;
