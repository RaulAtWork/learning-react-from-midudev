import { useCallback, useRef, useState } from "react";
import { getSearchEndPoint, mapSearchFilmList } from "../services/OMDb";

/**
 *  Retrieves a list of films form the OMDB database based on a search term
 * @param {string} searchTerm
 * @returns A list of films and a function that allows to update the movie list based on a search term
 */
export function useSearchFilm(searchTerm) {
  const [filmList, setFilmlist] = useState();

  //prevent continous fetch if the search term is the same
  const prevSearch = useRef(searchTerm);

  //create a method to be able to fetch data from the API
  const updateSearch = useCallback(async (searchTerm) => {
    if (searchTerm === prevSearch.current) return;
    if (!searchTerm) {
      setFilmlist();
      return;
    }
    async function dataFetch() {
      const response = await fetch(getSearchEndPoint(searchTerm));
      const data = await response.json();
      setFilmlist(mapSearchFilmList(data));
      prevSearch.current = searchTerm;
    }
    dataFetch();
  }, []);

  //return the list and a method to update based on search terms
  return [filmList, updateSearch];
}
