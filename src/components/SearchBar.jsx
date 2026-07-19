import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar({ onSearch, onReset }) {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    if (!search.trim()) return;
    setSearch(""); //clear the input after searching
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Pokemon Search:</label>
      <input
        type="text"
        value={search}
        placeholder="Search Pokemon here..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </form>
  );
}
