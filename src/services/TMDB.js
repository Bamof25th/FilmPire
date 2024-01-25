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
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        console.log(genreIdOrCategoryName);
        //  * GET movies by [TYPE]
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === 'string'
        ) {
          // Get movies by category
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === 'number'
        ) {
          // Get Movies by genre
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // *  Getmovie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
    // *  Get userSPecific List
    getList: builder.query({
      query: ({ listName, accountID, sessionId, page }) => `/account/${accountID}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),

    getReccomendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
    getActorsDetails: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetGenerasQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetListQuery,
  useGetReccomendationsQuery,
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} = tmdbApi;

//   query: () => 'movie/popular?language=en-US&page=1',
// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
