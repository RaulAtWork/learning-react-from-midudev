import React from "react";
import "./styles/index.css";
import mockFilmList from "./mocks/omdb-search-fast.json";
import Film from "./components/Film";

function App() {
  return (
    <main>
      <h1>Film Searcher</h1>
      <input type="text" placeholder="Search a film"></input>
      <button> Search</button>
      <div className="film-list">
        {mockFilmList.Search.map((item) => {
          return (
            <Film
              key={item.imdbID}
              title={item.Title}
              year={item.Year}
              poster={item.Poster}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
