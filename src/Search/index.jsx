import { ResultList } from "./Result";
import "./search.css";
import { useSearch } from "./useSearch";

export function Search() {
  const { getMovies, suggestions } = useSearch();

  const onInput = (e) => getMovies(e.target.value);

  return (
    <div className="search">
      <h1>Search for movie infos</h1>
      <input type="text" onInput={onInput} placeholder="Movie name..." />
      <ResultList items={suggestions} />
    </div>
  );
}
