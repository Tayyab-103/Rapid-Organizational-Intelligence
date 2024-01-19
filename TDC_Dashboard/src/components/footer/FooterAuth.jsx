/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  useTheme,
} from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const textColor = theme.palette.mode === "light" ? "gray.400" : "white";
  const linkColor = theme.palette.mode === "light" ? { base: "gray.400", lg: "white" } : "white";

  return (
    <Box
      zIndex={3}
      display={{
        xs: "flex",
        lg: "block",
      }}
      flexDirection={{
        xs: "column",
        lg: "row",
      }}
      alignItems={{
        xs: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      paddingX={{ xs: "30px", md: "0px" }}
      paddingBottom="30px"
    >
      <Typography
        color={textColor}
        textAlign={{
          xs: "center",
          xl: "start",
        }}
        marginBottom={{
          xs: "20px",
          lg: "0px",
        }}
      >
        &copy; {1900 + new Date().getYear()}{" "}
        <Typography
          component="span"
          fontWeight="500"
          marginLeft="4px"
        >
          Horizon UI. All Rights Reserved. Made with love by
          <Link
            marginLeft="3px"
            color={textColor}
            href="https://www.simmmple.com?ref=horizon-chakra-free"
            target="_blank"
            fontWeight="700"
          >
            Simmmple!
          </Link>
        </Typography>
      </Typography>
      <List
        display="flex"
        marginLeft={{
          xs: "0",
          md: "44px",
        }}
      >
        <ListItem>
          <Link
            fontWeight="500"
            color={linkColor}
            href="mailto:hello@simmmple.com?ref=horizon-chakra-free"
          >
            Support
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://www.simmmple.com/licenses?ref=horizon-chakra-free"
          >
            License
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://simmmple.com/terms-of-service?ref=horizon-chakra-free"
          >
            Terms of Use
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://www.blog.simmmple.com/?ref=horizon-chakra-free"
          >
            Blog
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
