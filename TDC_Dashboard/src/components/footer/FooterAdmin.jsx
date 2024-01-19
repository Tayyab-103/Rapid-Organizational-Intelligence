/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Link, List, ListItem, Typography, ThemeProvider, createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export default function Footer() {
  const theme = createTheme({
    palette: {
      mode: "light", // You can toggle between light and dark modes based on your logic
      primary: {
        main: blue[500],
      },
      text: {
        primary: grey[400],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        zIndex={3}
        display={{
          xs: "flex",
          xl: "block",
        }}
        flexDirection={{
          xs: "column",
          xl: "row",
        }}
        alignItems={{
          xs: "center",
          xl: "start",
        }}
        justifyContent="center"
        paddingX={{ xs: "30px", md: "50px" }}
        paddingBottom="30px"
      >
        <Typography
          color="text.primary"
          textAlign={{
            xs: "center",
            xl: "start",
          }}
          marginBottom={{
            xs: "20px",
            xl: "0px",
          }}
        >
          &copy; {1900 + new Date().getYear()}{" "}
          <Typography
            component="span"
            fontWeight="500"
            marginLeft="4px"
          >
            TDC. All Rights Reserved.
          </Typography>
        </Typography>
        <List
          display="flex"
          marginLeft={{
            xs: "0",
            xl: "auto",
          }}
        >
          <ListItem
            marginRight={{
              xs: "20px",
              md: "44px",
            }}
          >
            <Link
              fontWeight="500"
              color="text.primary"
              href="mailto:hello@simmmple.com"
            >
              Support
            </Link>
          </ListItem>
          {/* Add more ListItems as needed */}
        </List>
      </Box>
    </ThemeProvider>
  );
}
