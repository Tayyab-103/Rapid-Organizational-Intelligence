/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { renderThumb, renderTrack, renderView } from '../../components/scrollbar/Scrollbar';
import Content from './components/Content';

const Sidebar = (props) => {
  const { routes } = props;

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  let variantChange = '0.2s linear';
  let shadow = isSmDown ? 'unset' : '14px 17px 40px 4px rgba(112, 144, 176, 0.08)';
  let sidebarBg = theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.nav.dark;
  let sidebarMargins = '0px';

  return (
    <Box display={{ sm: 'none', xl: 'block' }} position="fixed" width="100%" minHeight="100%">
      <Box
        bgcolor={sidebarBg}
        transition={variantChange}
        width="300px"
        height="100vh"
        margin={sidebarMargins}
        minHeight="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Scrollbars autoHide renderTrackVertical={renderTrack} renderThumbVertical={renderThumb} renderView={renderView}>
          <Content routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
};

export function SidebarResponsive(props) {
  const { routes } = props;

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  let sidebarBackgroundColor = theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.nav.dark;
  let menuColor = theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.common.white;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Box display={{ sm: 'flex', xl: 'none' }} alignItems="center">
      <IconButton ref={null} onClick={handleDrawerOpen}>
        <MenuIcon color={menuColor} />
      </IconButton>
      <Drawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={isOpen}
        onClose={handleDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent width="285px" maxWidth="285px" bgcolor={sidebarBackgroundColor}>
          <DrawerCloseButton />
          <DrawerBody maxWidth="285px" paddingX="0rem" paddingBottom="0">
            <Scrollbars autoHide renderTrackVertical={renderTrack} renderThumbVertical={renderThumb} renderView={renderView}>
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};

export default Sidebar;
