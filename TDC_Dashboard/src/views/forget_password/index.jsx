/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import PasswordReset from "./components/PasswordReset";

export default function Teams() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Forget Password
        </Typography>

        <PasswordReset />
      </Container>
    </Box>
  );
}
