/* eslint-disable no-unused-vars */


import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <>
     <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <CircularProgress color="primary" size={40} thickness={4} />
    </div>
    
    </>
   
  );
};

export default Loader;
