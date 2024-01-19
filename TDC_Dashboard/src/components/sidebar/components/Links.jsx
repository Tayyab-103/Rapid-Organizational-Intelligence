/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';

export function SidebarLinks(props) {
  const location = useLocation();

  const activeColor = 'gray.700';
  const inactiveColor = 'secondaryGray.600';
  const activeIconColor = 'brand.500';
  const textColor = 'secondaryGray.500';
  const brandColor = 'brand.500';

  const { routes } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <Stack key={index} spacing={1} paddingTop={1} paddingBottom={2}>
            <Typography
              variant="body1"
              color={activeColor}
              fontWeight="bold"
              paddingLeft={{
                sm: '10px',
                xl: '16px',
              }}
            >
              {route.name}
            </Typography>
            {createLinks(route.items)}
          </Stack>
        );
      } else if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        return (
          <RouterLink key={index} to={route.layout + route.path} style={{ textDecoration: 'none' }}>
            <Box>
              <Stack
                direction="row"
                spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
                paddingY="5px"
                paddingLeft="10px"
              >
                <Box
                  color={activeRoute(route.path.toLowerCase()) ? activeIconColor : textColor}
                  marginRight="18px"
                >
                  {route.icon}
                </Box>
                <Typography
                  marginRight="auto"
                  color={activeRoute(route.path.toLowerCase()) ? activeColor : textColor}
                  fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}
                >
                  {route.name}
                </Typography>
              </Stack>
              <Box
                height="36px"
                width="4px"
                backgroundColor={activeRoute(route.path.toLowerCase()) ? brandColor : 'transparent'}
                borderRadius="5px"
              />
            </Box>
          </RouterLink>
        );
      }
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
