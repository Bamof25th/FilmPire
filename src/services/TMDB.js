import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //  * GET  Genres
    getGeneras: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //  * GET movies by [TYPE]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          // Get movies by category
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          // Get Movies by genre
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetGenerasQuery, useGetMoviesQuery } = tmdbApi;

//   query: () => 'movie/popular?language=en-US&page=1',
// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
