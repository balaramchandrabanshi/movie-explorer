const accessToken = import.meta.env.VITE_TMDB_API_TOKEN;

export function getPopularMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
        console.log(json.results)
      return json.results;
    })
    .catch((err) => console.error(err));
}


// fetching movie details
export function getMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${accessToken}`,
    },
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error(err));
}



