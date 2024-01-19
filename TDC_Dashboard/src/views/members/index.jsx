/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container, Typography } from "@mui/material";

import MembersTable from "./components/MembersTable";

export default function Members() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Members
        </Typography>
        <MembersTable />
      </Container>
    </Box>
  );
}
