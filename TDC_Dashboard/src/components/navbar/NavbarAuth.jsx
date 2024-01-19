/* eslint-disable no-unused-vars */



import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Link,
  Menu,
  MenuItem,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { styled } from '@mui/system';
import routes from 'routes.js';

const StyledNavLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const AuthNavbar = (props) => {
  const [openDashboards, setOpenDashboards] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openMain, setOpenMain] = useState(false);
  const [openNft, setOpenNft] = useState(false);

  const handleOpen = (menuName) => {
    switch (menuName) {
      case 'Dashboards':
        setOpenDashboards(true);
        break;
      case 'Authentication':
        setOpenAuth(true);
        break;
      case 'Main Pages':
        setOpenMain(true);
        break;
      case 'NFTs':
        setOpenNft(true);
        break;
      default:
        break;
    }
  };

  const handleClose = (menuName) => {
    switch (menuName) {
      case 'Dashboards':
        setOpenDashboards(false);
        break;
      case 'Authentication':
        setOpenAuth(false);
        break;
      case 'Main Pages':
        setOpenMain(false);
        break;
      case 'NFTs':
        setOpenNft(false);
        break;
      default:
        break;
    }
  };

  const renderNavLink = (link) => (
    <StyledNavLink to={link.layout + link.path} key={link.name}>
      <Typography color="gray.400" fontSize="sm" fontWeight="normal">
        {link.name}
      </Typography>
    </StyledNavLink>
  );

  const createMenuLinks = (routes) =>
    routes.map((link, key) => {
      if (link.collapse === true) {
        return (
          <Stack key={key} direction="column" my="auto" maxWidth="max-content">
            <Stack
              direction="row"
              spacing="0px"
              align="center"
              cursor="pointer"
              width="max-content"
              onMouseEnter={() => handleOpen(link.name)}
              onMouseLeave={() => handleClose(link.name)}
            >
              <Box
                bg="brand.500"
                height="30px"
                width="30px"
                marginRight="10px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {link.icon}
              </Box>
              <Typography
                fontWeight="bold"
                fontSize="md"
                marginRight="auto"
                color="#fff"
              >
                {link.name}
              </Typography>
              <ArrowRightIcon
                color="#fff"
                width="14px"
                height="14px"
                fontWeight="2000"
              />
            </Stack>
            <Stack direction="column" bgcolor="#fff">
              {createMenuLinks(link.items)}
            </Stack>
          </Stack>
        );
      } else {
        return renderNavLink(link);
      }
    });

  const linksAuth = (
    <Stack
      display={{ sm: 'none', lg: 'flex' }}
      spacing="12px"
      onMouseEnter={() => handleOpen('Dashboards')}
      onMouseLeave={() => handleClose('Dashboards')}
    >
      <Stack direction="row" spacing="4px" align="center" color="#fff" fontWeight="bold">
        <Typography fontSize="sm" color="#fff">
          Dashboards
        </Typography>
        <ArrowDropDownIcon />
      </Stack>
      <Popper open={openDashboards} anchorEl={null} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Box
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <Box padding="22px" cursor="default" borderRadius="15px">
                <Grid container spacing={2}>
                  {createMenuLinks(routes.filter((route) => route.name === 'Dashboards')[0].items)}
                </Grid>
              </Box>
            </Paper>
          </Box>
        )}
      </Popper>

      {/* ... Similarly, handle other menu links */}
    </Stack>
  );

  return (
    <Box
      position="absolute"
      top="16px"
      left="50%"
      transform="translate(-50%, 0px)"
      background="none"
      boxShadow="initial"
      borderRadius="15px"
      padding="16px"
      marginX="auto"
      width="1044px"
      maxWidth="90%"
      alignItems="center"
      zIndex="3"
    >
      <Box
        marginLeft={{ base: 'auto', lg: '0px' }}
        display={{ base: 'flex', lg: 'none' }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Assuming SidebarResponsive is a custom component */}
        {/* <SidebarResponsive
          logo={
            <Stack direction='row' spacing='12px' align='center' justify='center'>
              <Box w='1px' h='20px' bg={colorMode === 'dark' ? 'white' : 'gray.700'} />
            </Stack>
          }
          logoText={props.logoText}
          secondary={props.secondary}
          routes={routes}
          {...rest}
        /> */}
      </Box>
      {linksAuth}
      <Link href="https://www.horizon-ui.com/pro">
        <Button
          bgcolor="#fff"
          color="#brand.500"
          fontSize="xs"
          variant="contained"
          borderRadius="50px"
          paddingX="45px"
          display={{ sm: 'none', lg: 'flex' }}
        >
          Buy Now
        </Button>
      </Link>
    </Box>
  );
};

export default AuthNavbar;
