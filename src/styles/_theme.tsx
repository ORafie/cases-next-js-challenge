import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: ["Work Sans", "sans-serif"].join(","),
    fontSize: 16,
    // These heading styles below are implementations of the design
    // and are not intended to be used by rich text fields of prismic
    h1: {
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.2,
      wordBreak: "break-word",
    },
    h2: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.16,
      wordBreak: "break-word",
    },
    h3: {
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1.23,
      wordBreak: "break-word",
    },
    h4: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.33,
      wordBreak: "break-word",
    },
    h5: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.6,
      wordBreak: "break-word",
    },
    h6: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      wordBreak: "break-word",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 18,
        },
        outlined: {
          border: 2,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 600,
          color: "black",
        },
      },
    },
  },
  palette: {
    text: {
      primary: "#191E28",
      secondary: "rgba(25, 30, 40, 0.7)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    primary: {
      main: "#4E55A2",
      dark: "#000050",
      light: "#999FE0",
    },
    secondary: {
      main: "#FFC803",
      dark: "#F5A303",
      light: "#FEE280",
      contrastText: "#333341",
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      light: "#EF5350",
    },
    warning: {
      main: "#ED6C02",
      dark: "#E65100",
      light: "#FF9800",
    },
    info: {
      main: "#0288D1",
      dark: "#01579B",
      light: "#03A9F4",
    },
    success: {
      main: "#2E7D32",
      dark: "#1B5E20",
      light: "#4CAF50",
    },
    background: {
      paper: "#FFFFFF",
      default: "#F0F0EA",
    },
  },
}));

export default theme;
