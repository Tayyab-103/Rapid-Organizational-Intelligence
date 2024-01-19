/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Stack } from '@mui/material';
import Brand from './Brand';
import Links from './Links';
import SidebarCard from './SidebarCard';

function SidebarContent(props) {
  const { routes } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      paddingTop="25px"
      paddingLeft="16px"
      paddingRight={{ md: '16px', '2xl': '1px' }}
      borderRadius="30px"
    >
      <Brand />
      <Stack direction="column" marginBottom="auto" marginTop="8px">
        <Box paddingLeft="20px" paddingRight={{ md: '16px', '2xl': '1px' }}>
          <Links routes={routes} />
        </Box>
      </Stack>

      {/* <Box
        marginTop="60px"
        marginBottom="40px"
        borderRadius="30px"
      >
        <SidebarCard />
      </Box> */}
    </Box>
  );
}

export default SidebarContent;
