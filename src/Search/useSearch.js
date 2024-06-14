import { useState } from "react";
import { request } from "../Base";

export function useSearch() {
  const [suggestions, setSuggestions] = useState([]);

  const getMovies = async (query) => {
    let movies = [];

    if (query) {
      const response = await request(
        `https://api.themoviedb.org/3/search/movie?api_key=d66847ac8930a93c02c80c4243bfd558&query=${query}`,
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
