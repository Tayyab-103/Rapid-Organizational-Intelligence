/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from "@mui/system";
import Slider from '@mui/material/Slider';

const useStyles = makeStyles((theme) => ({
  track: {
    position: 'absolute',
    maxWidth: '100%',
    width: 6,
    transition: 'opacity 200ms ease 0s',
    opacity: 0,
    background: 'transparent',
    bottom: 2,
    top: 2,
    borderRadius: 3,
    right: 0,
  },
  thumb: {
    borderRadius: 15,
    background: 'rgba(222, 222, 222, .1)',
  },
  view: {
    marginBottom: -22,
    marginRight: theme.breakpoints.up('lg') ? '-16px !important' : '0px !important',
  },
}));

const CustomScrollbar = () => {
  const classes = useStyles();

  return (
    <Slider
      classes={{
        track: classes.track,
        thumb: classes.thumb,
        valueLabel: classes.view,
      }}
    />
  );
};

export default CustomScrollbar;
