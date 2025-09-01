"use server";
const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "b9852d64";

export async function movies(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 1800,
        tags: ["movies"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function moviesDetails(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 43200,
        tags: ["movie-details"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function castandCrew(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 86400,
        tags: ["cast-crew"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function keywords(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 86400,
        tags: ["keywords"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function recommendations(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 10800,
        tags: ["recommendations"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function movieByKeyword(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 21600,
        tags: ["keyword-movies"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function tvShows(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 1800,
        tags: ["tv-shows"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function tvShowsDetails(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 21600,
        tags: ["tv-details"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function person(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 21600,
        tags: ["person"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function personDetails(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 86400,
        tags: ["person-details"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function castCredit(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 43200,
        tags: ["cast-credits"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function getTrailer(endpoint) {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    {
      next: {
        revalidate: 86400,
        tags: ["trailers"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function search(endpoint, page) {
  const response = await fetch(
    `${BASE_URL}search/multi?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${endpoint}&page=${page}`,
    {
      next: {
        revalidate: 3600,
        tags: ["search"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting ${endpoint}`);
  return response.json();
}

export async function getIMDBData(endpoint) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${KEY}&i=${endpoint}`,
    {
      next: {
        revalidate: 86400,
        tags: ["imdb-movie"],
      },
    },
  );
  if (!response.ok)
    throw new Error(`There was an error getting movies details`);
  return response.json();
}

export async function getIMDBDataForTV(endpoint) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${KEY}&t=${endpoint}`,
    {
      next: {
        revalidate: 86400,
        tags: ["imdb-tv"],
      },
    },
  );
  if (!response.ok) throw new Error(`There was an error getting tv details`);
  return response.json();
}
