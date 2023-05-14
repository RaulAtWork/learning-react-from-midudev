const APIKEY = "d16a2a5e";
const ENDPOINT = `http://www.omdbapi.com/?apikey=${APIKEY}`;

//http://www.omdbapi.com/?apikey=d16a2a5e&s=fast

/**
 * Generates the OMDB API endpoint
 * @param {string} searchTerm
 * @returns
 */
export function getSearchEndPoint(searchTerm) {
  return ENDPOINT + `&s=${searchTerm}`;
}

/**
 * mapps the response from OMDB API when performing a Search fetch
 * @param {Object} filmList
 * @returns
 */
export function mapSearchFilmList(filmList) {
  if (!filmList.Search) return;
  let mappedResult = [...filmList.Search];
  mappedResult = mappedResult.map((item) => {
    return mapFilmResponse(item);
  });

  return mappedResult;

  function mapFilmResponse(film) {
    return {
      title: film.Title,
      year: film.Year,
      poster: film.Poster,
      key: film.imdbID,
    };
  }
}
