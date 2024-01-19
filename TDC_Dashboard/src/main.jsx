/* eslint-disable */


// import React from 'react'
// import ReactDOM from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import ReactDOM from "react-dom/client";
// import { CssBaseline } from "@mui/material";
// import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider } from "@mui/system";
// import { ThemeEditorProvider } from "@hypertheme-editor/mui";
// import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import store from "store/store";
// import theme from "theme/theme";
// import App from './App.jsx'

// ReactDOM.render(
//   <Provider store={store}>
//     <ThemeProvider theme={theme}>
//       <React.StrictMode>
//         <ThemeEditorProvider>
//           <Router>
//             <CssBaseline />
//             <App />
//           </Router>
//         </ThemeEditorProvider>
//         <ToastContainer />
//       </React.StrictMode>
//     </ThemeProvider>
//   </Provider>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
// import App from 'App.jsx'
import store from "./store/store.js"
import theme from "./theme/muitheme.jsx";
import App from "./App.jsx"

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
      <ToastContainer />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

