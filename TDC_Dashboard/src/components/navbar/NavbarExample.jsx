/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from 'react-router-dom';
import routes from 'routes';

const drawerWidth = 240;

export default function AuthNavbar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const createPagesLinks = (routes) => {
    return routes.map((link) => {
      if (
        link.name === 'Applications' ||
        link.name === 'Ecommerce' ||
        link.name === 'Authentication' ||
        link.name === 'RTL' ||
        link.name === 'Widgets' ||
        link.name === 'Charts' ||
        link.name === 'Alerts'
      ) {
        return null;
      }
      if (link.name === 'Pricing Page') {
        return (
          <React.Fragment key={link.name}>
            <Stack direction='column' spacing={2}>
              <Typography variant='subtitle2' fontWeight='bold' color='primary'>
                Extra
              </Typography>
              {createExtraLinks(link.items)}
            </Stack>
          </React.Fragment>
        );
      }
      if (link.authIcon) {
        return (
          <React.Fragment key={link.name}>
            <Stack direction='column' spacing={2}>
              <Typography variant='subtitle2' fontWeight='bold' color='primary'>
                {link.name}
              </Typography>
              {createPagesLinks(link.items)}
            </Stack>
          </React.Fragment>
        );
      } else {
        if (link.component) {
          return (
            <NavLink key={link.name} to={link.layout + link.path} style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemText primary={link.name} />
              </ListItem>
            </NavLink>
          );
        } else {
          return <React.Fragment key={link.name}>{createPagesLinks(link.items)}</React.Fragment>;
        }
      }
    });
  };

  const createExtraLinks = (routes) => {
    return routes.map((link) => {
      return (
        <NavLink key={link.name} to={link.layout + link.path} style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemText primary={link.name} />
          </ListItem>
        </NavLink>
      );
    });
  };

  return (
    <Box>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            Your Logo
          </Typography>
          <Button color='inherit' href='https://www.horizon-ui.com/pro'>
            Buy Now
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='temporary'
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <div style={{ width: drawerWidth }}>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronRightIcon />
          </IconButton>
          <Divider />
          <List>
            {createPagesLinks(routes)}
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
