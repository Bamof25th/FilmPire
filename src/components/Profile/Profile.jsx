import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';
import { useGetListQuery } from '../../services/TMDB';
import RatedCards from '../RatedCards/RatedCards';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const { data: favoriteMovies, refetch: refetchFav } = useGetListQuery({ listName: 'favorite/movies', accounID: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery({ listName: 'watchlist/movies', accounID: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  useEffect(() => {
    refetchFav();
    refetchWatchlist();
  });

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
      {!favouriteMovies?.results?.length && !watchlistMovies?.results?.length
        ? (
          <Typography variant="h5">
            You do not have any favourite movies yet. Please search for a movie and
            add
          </Typography>
        ) : (
          <Box>
            <RatedCards title="Favorite Movies" data={favoriteMovies} />
            <RatedCards title="WatchList" data={watchlistMovies} />
          </Box>
        )}
    </Box>
  );
};

export default Profile;
