import { useState } from "react";
import { request } from "../Base";

export function useSearch() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // big pagination
  // show actors, other request
  // more complexity
  const getMovies = async (e) => {
    let movies = [];
    const query = e.target.value;

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

      setSuggestions(movies);
    }

    setInputValue(query);
  };

  return {
    onInput: getMovies,
    suggestions,
    inputValue,
  };
}
