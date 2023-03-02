import React from 'react';
import type {AppProps} from 'next/app'
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/styles/_theme";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
