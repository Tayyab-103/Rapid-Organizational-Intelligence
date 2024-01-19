/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Breadcrumbs,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import AdminNavbarLinks from 'components/navbar/NavbarLinksAdmin';
import { useScrollTrigger } from '@mui/material';

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const changeNavbar = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, []);

  const { secondary, message, brandText } = props;

  const navbarPosition = scrolled ? 'fixed' : 'relative';

  return (
    <Box
      position={navbarPosition}
      boxShadow={{ xs: 0, sm: 1 }}
      bgcolor={secondary ? 'rgba(11,20,55,0.5)' : 'rgba(244, 247, 254, 0.2)'}
      borderRadius='16px'
      borderWidth='1.5px'
      borderStyle='solid'
      transition='box-shadow 0.25s, background-color 0.25s'
      alignItems={isMobile ? 'center' : 'flex-start'}
      display={secondary ? 'block' : 'flex'}
      minHeight='75px'
      justifyContent={isMobile ? 'center' : 'flex-start'}
      lineHeight='25.6px'
      mx='auto'
      paddingTop={isMobile ? '8px' : 0}
      paddingLeft={isMobile ? '15px' : '30px'}
      paddingRight={isMobile ? '15px' : '30px'}
      paddingBottom='8px'
      left='12px'
      right='12px'
      top={isMobile ? '12px' : 0}
      width={{
        xs: 'calc(100vw - 6%)',
        sm: 'calc(100vw - 8%)',
        md: 'calc(100vw - 6%)',
        lg: 'calc(100vw - 350px)',
        '2xl': 'calc(100vw - 365px)',
      }}
    >
      <Box width='100%' display='flex' flexDirection={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'center' : 'flex-start'} marginBottom={isMobile ? '8px' : 0}>
        <Breadcrumbs>
          <Link color='rgba(0, 0, 0, 0.54)' fontSize='sm' marginBottom='5px'>
            Pages
          </Link>
          <Link color='rgba(0, 0, 0, 0.54)' fontSize='sm'>
            {brandText}
          </Link>
        </Breadcrumbs>
        <Link
          color={scrolled ? 'rgba(0, 0, 0, 0.87)' : 'white'}
          href='#'
          bgcolor='inherit'
          borderRadius='inherit'
          fontWeight='bold'
          fontSize='34px'
          style={{ marginLeft: isMobile ? '0' : 'auto' }}
        >
          {brandText}
        </Link>
      </Box>
      {!isMobile && (
        <AdminNavbarLinks
          onOpen={props.onOpen}
          logoText={props.logoText}
          secondary={props.secondary}
          fixed={props.fixed}
          scrolled={scrolled}
        />
      )}
      {secondary && <Typography color='white'>{message}</Typography>}
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
