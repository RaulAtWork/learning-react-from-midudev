const APIKEY = "d16a2a5e";
const ENDPOINT = `http://www.omdbapi.com/?apikey=${APIKEY}`;

//http://www.omdbapi.com/?apikey=d16a2a5e&s=fast

function getSearchEndPoint({ searchTerm }) {
  return ENDPOINT + `&s=${searchTerm}`;
}
