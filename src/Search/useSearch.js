import { useState } from "react";
import { request } from "../Base/request";

export function useSearch() {
  const [suggestions, setSuggestions] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  if (!apiKey) {
    return {
      error: `
      Missing TMDB API key. 
      Please, see <a href="https://developer.themoviedb.org/docs/authentication-application">how to generate a key</a>, 
      and set <b>VITE_TMDB_API_KEY</b> env var with the new key.
      `,
      getMovies: () => {},
      suggestions: [],
    };
  }

  const getMovies = async (query) => {
    let movies = [];

    if (query) {
      const response = await request(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
      );

      if (response && response.results && response.results.length) {
        movies = response.results.map((movie) => ({
          title: movie["title"],
          description: movie["release_date"]
            ? new Date(movie["release_date"]).getFullYear()
            : "N/A",
          cover: `https://image.tmdb.org/t/p/w200${movie["poster_path"]}`,
          popularity: movie["popularity"],
          ranking: `${Number(Number(movie["vote_average"]).toFixed(1))} / 10`,
        }));

        movies.sort((a, b) => b.popularity - a.popularity);
      }
    }

    setSuggestions(movies);
  };

  return {
    getMovies,
    suggestions,
  };
}
