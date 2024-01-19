/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
// import AdminNavbarLinks from 'components/navbar/NavbarLinksAdmin';
import AdminNavbarLinks from './NavbarLinksAdmin';
import PropTypes from 'prop-types';

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  });

  const { secondary, message, brandText } = props;

  let mainText = theme.palette.mode === 'light' ? theme.palette.nav : theme.palette.common.white;
  let secondaryText = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.common.white;
  let navbarBg = theme.palette.mode === 'light' ? 'rgba(244, 247, 254, 0.2)' : 'rgba(11,20,55,0.5)';
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Box
      position="fixed"
      boxShadow="none"
      backgroundColor={navbarBg}
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      borderColor="transparent"
      alignItems={{ xl: 'center' }}
      display={secondary ? 'block' : 'flex'}
      minHeight="75px"
      justifyContent={{ xl: 'center' }}
      lineHeight="25.6px"
      mx="auto"
      marginTop={secondary ? '0px' : '20px'}
      paddingBottom="8px"
      right={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
      paddingLeft={{ sm: '15px', md: '10px' }}
      paddingRight={{ xl: '12px' }}
      paddingTop="8px"
      top={{ base: '12px', md: '16px', lg: '20px', xl: '20px' }}
      width={{
        base: 'calc(100vw - 6%)',
        md: 'calc(100vw - 8%)',
        lg: 'calc(100vw - 6%)',
        xl: 'calc(100vw - 350px)',
        '2xl': 'calc(100vw - 365px)',
      }}
    >
      <Box
        width="100%"
        flexDirection={{
          sm: 'column',
          md: 'row',
        }}
        alignItems={{ xl: 'center' }}
        marginBottom="0px"
      >
        <Box marginBottom={{ sm: '8px', md: '0px' }}>
          <Breadcrumbs>
            <Link color={secondaryText} fontSize="sm" marginBottom="5px">
              Pages
            </Link>
            <Link color={secondaryText} fontSize="sm" marginBottom="5px">
              {brandText}
            </Link>
          </Breadcrumbs>
          <Link
            color={mainText}
            href="#"
            borderRadius="inherit"
            fontWeight="bold"
            fontSize="34px"
            _hover={{ color: { mainText } }}
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent',
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            {brandText}
          </Link>
        </Box>
        <Box marginLeft="auto" width={{ sm: '100%', md: 'unset' }}>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            scrolled={scrolled}
          />
        </Box>
      </Box>
      {secondary ? <Typography color="white">{message}</Typography> : null}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
