import "./search.css";
import { ResultList } from "./Result";
import { useSearch } from "./useSearch";

export function Search() {
  const { getMovies, suggestions, error } = useSearch();

  const onInput = (e) => getMovies(e.target.value);

  return (
    <div className="search">
      <h1>Search for movie infos</h1>
      <input type="text" onInput={onInput} placeholder="Movie name..." />
      <ResultList items={suggestions} error={error} />
    </div>
  );
}
