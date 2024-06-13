import { useState } from "react";

export function useSearch() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // add sort
  // big pagination
  // show actors, other request
  // more complexity
  const getMovies = (e) => {
    const r = [];

    fetch(`https://search.imdbot.workers.dev/?q=${e.target.value}`)
      .then(async (response) => {
        const result = await response.json();

        if (result && result.description) {
          const movies = result.description.map((movie) => ({
            title: movie["#TITLE"],
            description: movie["#YEAR"],
            cover: movie["#IMG_POSTER"],
            ranking: movie["#RANK"],
          }));

          movies.sort((a, b) => a.ranking - b.ranking);

          r.push(...movies);
        }
      })
      .finally(() => setSuggestions(r));

    setInputValue(e.target.value);
  };

  return {
    onInput: getMovies,
    suggestions,
    inputValue,
  };
}
