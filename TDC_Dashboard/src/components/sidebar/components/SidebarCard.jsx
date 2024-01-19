/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Button,
  Typography,
  Link as MuiLink,
  Paper,
} from '@mui/material';
// import logoWhite from 'assets/img/layout/logoWhite.png';
import logoWhite from '../../../assets/img/layout/logoWhite.png';

export default function SidebarDocs() {
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';
  const borderColor = 'white'; // Adjust the color as needed

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: bgColor,
        borderRadius: '30px',
        position: 'relative',
        textAlign: 'center',
        p: '15px',
        m: '12px',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '50%',
          top: '-47px',
          width: '94px',
          height: '94px',
          borderRadius: '50%',
          border: `5px solid ${borderColor}`,
          backgroundColor: bgColor,
          transform: 'translate(-50%, 0%)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: '12px',
        }}
      >
        <img src={logoWhite} alt="Logo" width="40" height="40" />
        <Typography
          variant={{ base: 'lg', xl: 'h6' }}
          color='white'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mt='10px'
          mb='6px'
        >
          Upgrade to PRO
        </Typography>
        <Typography
          variant="body2"
          color='white'
          fontWeight='500'
          px='10px'
          mb='6px'
          textAlign='center'
        >
          Improve your development process and start doing more with Horizon UI PRO!
        </Typography>
      </Box>
      <MuiLink href='https://horizon-ui.com/pro?ref=horizon-chakra-free'>
        <Button
          sx={{
            backgroundColor: 'whiteAlpha.300',
            '&:hover': { backgroundColor: 'whiteAlpha.200' },
            '&:active': { backgroundColor: 'whiteAlpha.100' },
            color: 'white',
            fontWeight: 'regular',
            fontSize: 'sm',
            minWidth: '185px',
            mx: 'auto',
          }}
        >
          Upgrade to PRO
        </Button>
      </MuiLink>
    </Paper>
  );
}
