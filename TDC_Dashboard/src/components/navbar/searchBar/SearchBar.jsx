/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

// Custom styles for Material-UI components
const StyledInput = styled(Input)({
  fontSize: '14px',
  fontWeight: 500,
  borderRadius: '30px',
});

function SearchBar(props) {
  const {
    variant,
    background,
    children,
    placeholder,
    borderRadius,
    Filter,
    ...rest
  } = props;

  const [search, setSearch] = useState('');

  const handleInputChange = (value) => {
    setSearch(value);
    Filter(value);
  };

  return (
    <StyledInput
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <IconButton disableRipple>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
      variant="filled"
      placeholder={placeholder ? placeholder : 'Search...'}
      value={search}
      onChange={(e) => handleInputChange(e.target.value)}
      style={{
        backgroundColor: background ? background : 'inherit',
      }}
      {...rest}
    />
  );
}

export default SearchBar;
