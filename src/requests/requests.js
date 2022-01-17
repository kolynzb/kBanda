const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const requests = {
  // fetchMovieById: `/movie/634649/similar?api_key=${API_KEY}&language=en-US`,
  fetchTrendingWeek: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMovieTrailersById: (movieId) =>
    `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,

  fetchSimilarMovies: (movieId) =>
    `movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`,

  fetchMovieById: (movieId) =>
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
};
export const img_url = "https://image.tmdb.org/t/p/original/";
export default requests;
