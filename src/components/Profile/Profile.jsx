import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  const favouriteMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" position="relative">
        <Typography variant="h4" gutterBottom>
          MY Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          LogOut &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favouriteMovies.length ? (
        <Typography variant="h5">
          You don't have any favourite movies yet. Please search for a movie and
          add
        </Typography>
      ) : (
        <Box sx={{ ml: -30 }}>Favorite Movies</Box>
      )}
    </Box>
  );
};

export default Profile;
