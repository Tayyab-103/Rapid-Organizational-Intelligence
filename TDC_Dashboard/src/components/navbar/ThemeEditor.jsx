/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Drawer,
  IconButton,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { ImFontSize } from 'react-icons/im';
import { MdPalette } from 'react-icons/md';

export function ThemeEditor({ children }) {
  // You may need to replace this Box with the equivalent Material-UI component
  // for your ThemeEditorContainer.
  return <Box>{children}</Box>;
}

export function ThemeEditorButton({ onOpen, navbarIcon, ...rest }) {
  return (
    <Button
      variant='text'
      onClick={onOpen}
      {...rest}
      sx={{ p: 0, minWidth: 'unset', minHeight: 'unset', width: 'auto' }}
    >
      <IconButton size='small' sx={{ mr: '10px' }} onClick={onOpen} {...rest}>
        <MdPalette fontSize='inherit' color={navbarIcon} />
      </IconButton>
    </Button>
  );
}

export function ThemeEditorDrawer({ children, hideUpgradeToPro }) {
  // You may need to replace this Drawer with the equivalent Material-UI component
  // for your ThemeEditorDrawer.
  return <Drawer>{children}</Drawer>;
}

export function ThemeEditorColors({ icon: Icon, title }) {
  // You may need to replace this Box with the equivalent Material-UI component
  // for your ThemeEditorColors.
  return (
    <Box>
      <Typography variant='h6'>{title}</Typography>
      {/* Add your color picker logic here */}
      <Icon />
    </Box>
  );
}

export function ThemeEditorFontSizes({ icon: Icon, title }) {
  // You may need to replace this Box with the equivalent Material-UI component
  // for your ThemeEditorFontSizes.
  return (
    <Box>
      <Typography variant='h6'>{title}</Typography>
      {/* Add your font size picker logic here */}
      <Icon />
    </Box>
  );
}
