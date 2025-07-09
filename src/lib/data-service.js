const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "b9852d64";
export async function movies(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function moviesDetails(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function castandCrew(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function keywords(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function recommendations(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}

export async function movieByKeyword(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}

//TV endpoints
export async function tvShows(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function tvShowsDetails(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}

export async function person(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function personDetails(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function castCredit(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function getTrailer(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function search(endpoint, page) {
  const response = await fetch(
    `${BASE_URL}search/multi?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${endpoint}&page=${page}`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}

export async function getIMDBData(endpoint) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${KEY}&i=${endpoint}`,
  );
  if (!response.ok)
    throw new Error(`There was an error getting movies details`);
  return response.json();
}
export async function getIMDBDataForTV(endpoint) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${KEY}&t=${endpoint}`,
  );
  if (!response.ok) throw new Error(`There was an error getting tv details`);
  return response.json();
}
