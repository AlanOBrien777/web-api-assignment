import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;