const API_Key = "1a75e863f51d76f396762fc7ab3bc843";
const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-us`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_Key}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&swith_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};
export default requests;
