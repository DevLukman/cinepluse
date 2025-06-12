const BASE_URL = "https://api.themoviedb.org/3/";
//Movies Endpoints
export async function movies(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function moviesDetails(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function similarMovies(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function reviews(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function movieKeywords(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
export async function getMoviesByKeywords(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
  // `https://api.themoviedb.org/3/keyword/${id}/movies?api_key=${apiKey}`
}

//TV endpoints
export async function tv(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  );
  if (!response.ok) throw new Error(`There was an error get ${endpoint}`);

  return response.json();
}
