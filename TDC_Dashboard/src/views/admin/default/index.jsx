/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Settings() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="80vh"
          textAlign="center"
          padding="2rem"
        >
          <Typography variant="h1" component="h1" sx={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            ROI | Rapid Organizational Intelligence
          </Typography>

          <Typography variant="h2" sx={{ fontSize: "1.5rem", fontStyle: "italic" }}>
            Unlocking <span style={{ fontWeight: "bold" }}>Organizational</span> Brilliance at the{" "}
            <span style={{ fontWeight: "bold" }}>Speed</span> of Thought
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
