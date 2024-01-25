import React, { useEffect, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handelKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  if (location.pathname !== '/') return null;
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handelKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="filled"
        size="small"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
