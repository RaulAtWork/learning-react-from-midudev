import React from "react";

function Film({ title, year, poster }) {
  return (
    <section className="flex-center">
      <h2 className="film-title">{title}</h2>
      <p>{year}</p>
      <img src={poster} />
    </section>
  );
}

export default Film;
