import { ResultList } from "./Result";
import "./search.css";
import { useSearch } from "./useSearch";

export function Search() {
  const { onInput, suggestions, inputValue } = useSearch();

  return (
    <div className="search">
      <h1>Search for movie infos</h1>
      <input type="text" onInput={onInput} placeholder="Movie name..." />
      <span>{inputValue}</span>
      <ResultList items={suggestions} />
    </div>
  );
}
