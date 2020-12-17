# Assignment 1 - ReactJS app.

Name: Alan O Brien

## Features.
 
 + Feature 1 - A Top Rated Movie Page 
 + Feature 2 - A Popular Movie page
 + Feature 3 - A Now Playing Movie Page
 + Feature 4 - A Watchlist Page

## Setup requirements (If required).

You must run "npm install"(if not installed) and then "npm start" in the terminal window.

## API Data Model.

+ https://api.themoviedb.org/3/movie/top_rated - get a list of top rated movies. 
+ https://api.themoviedb.org/3/movie/popular - get a list of Popular Movies.
+ https://api.themoviedb.org/3/movie/now_playing- get a list of Now Playing movies.

## App Design.
A Movie list web app which allows the user to view movies and their details and to search for movies in multiple lists.


### UI Design.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

+ /movies/topRated (Public) - displays the Top Rated movies from TMDB.
+ /movies/popular (Public) - displays the most Popular movies from TMDB.
+ /movies/nowPlaying (Public) - displays the movies current playing in cinemas around the world.
+ /movies/watchlist (Public) - displays a list of movies added to a watchlist by the user.

### Data hyperlinking.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

[TopRated]: ./public/TopMovies.png
[Popular]: ./public/Popular.png
[NowPlaying]: ./public/NowMovies.png
[Watchlist]: ./public/Watchlist.png