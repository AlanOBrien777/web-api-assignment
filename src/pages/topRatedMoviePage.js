import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoriteButton from '../components/buttons/addToFavorites'

const TopRatedPage = () => {
const context = useContext(MoviesContext);
const movies = context.topRated.filter((m) => { // New
return !("favorites" in m);
});

return (
<PageTemplate
    title="Top Rated Movies"
    movies={movies}
    action={(topRated) => {
    return <AddToFavoriteButton movie={topRated} />;
    }}
/>
);
};

export default TopRatedPage;