/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, Typography, useTheme } from '@mui/material';

export function SidebarBrand() {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} /> */}
      <Box mt="5px" mb="50px" height="26px" width="175px">
        {/* <h1
          color={logoColor}
          style={{ fontWeight: "bolder", fontSize: "18px" }}
        >
          Rapid Organizational Intelligence
        </h1> */}
        <Box>
          <Link to="/admin">
            <img
              src="https://github.com/Tayyab-103/JavaScript-103/assets/109760448/2121afa4-8a0b-4b17-81b2-761e425fc7d2"
              alt="Logo"
              width={150}
              height={70}
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </Box>
      </Box>
      <Divider mb="20px" />
    </Box>
  );
}

export default SidebarBrand;
