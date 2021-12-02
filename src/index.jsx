import React from "react";
import ReactDOM from "react-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import "./index.css";
import App from "./App";
import CssBaseline from '@mui/material/CssBaseline';


let darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      dark: "#606472",
      main: "#606472",
    }
  },
});
darkTheme = responsiveFontSizes(darkTheme);

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

export default function indexPage() {
  return 
}
