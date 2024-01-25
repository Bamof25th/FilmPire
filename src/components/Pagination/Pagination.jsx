import React from 'react';

import { Button, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import useStyles from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();

  if (totalPages === 0) return null;

  const handelPrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handelNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div
      className={classes.container}
    >
      <Button onClick={handelPrev} color="primary" variant="elevated" className={classes.button} startIcon={<ArrowBack />} type="button" />
      <Typography variant="h4" className={classes.pageNumber}>{currentPage}</Typography>
      <Button onClick={handelNext} color="primary" variant="elevated" className={classes.button} startIcon={<ArrowForward />} type="button" />
    </div>
  );
};

export default Pagination;
