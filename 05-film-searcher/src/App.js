import React, { useCallback, useState } from "react";
import "./styles/index.css";
import { debounce } from "lodash";

import Film from "./components/Film";
import { useSearchFilm } from "./hooks/useSearchFilm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filmList, updateSearch] = useSearchFilm("");

  //handles form submition for search term
  function handleSubmit() {
    event.preventDefault();
    updateSearch(searchTerm);
  }

  //debounces the calls of search term for the constant search
  const debounce_update = useCallback(
    debounce((searchTerm) => {
      updateSearch(searchTerm);
    }, 500),
    []
  );

  //hanle change of search term
  function handleChange(event) {
    setSearchTerm(event.target.value);
    debounce_update(event.target.value);
  }

  return (
    <main>
      <h1>Film Searcher</h1>
      <form className="flex-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a film"
          value={searchTerm}
          onChange={handleChange}
        ></input>
        <button type="submit"> Search</button>
      </form>
      <div className="film-list">
        {filmList &&
          filmList.map((item) => {
            return (
              <Film
                key={item.key}
                title={item.title}
                year={item.year}
                poster={item.poster}
              />
            );
          })}
      </div>
      {!filmList && <p>No results</p>}
    </main>
  );
}

export default App;
