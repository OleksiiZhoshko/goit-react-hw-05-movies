import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '76cbb606f190fc237086ec33f1fd98a3';
export const fetchDayTrend = async (
  endpoints = `trending/movie/day`,
  options
) => {
  const resp = await axios.get(`${endpoints}?api_key=${apiKey}`, options);
  return resp.data;
};
export const fetchMovieByQuery = async (query, options) => {
  const resp = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    options
  );
  return resp.data;
};
export const fetchMovieDetsById = async (id, detailEndpoint = '', options) => {
  const resp = await axios.get(
    `movie/${id}${detailEndpoint}?api_key=${apiKey}&language=en-US`,
    options
  );
  return resp.data;
};

export const fetchCastInfo = async (movieId, options) => {
  const resp = await axios.get(`movie/${movieId}/credits?api_key=${apiKey}&language=en-US`, options);
  return resp.data.cast
}

export const fetchReviewsInfo = async (movieId, options) => {
  const resp = await axios.get(`movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`, options);
  return resp.data.results
}