// actions/movies.js
import axios from 'axios';

const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjUwNDQ3ZjI1N2EwM2JiYjNlNmY3ZDMxMDYwYzgyNyIsInN1YiI6IjY1MWQ3OTlkZWE4NGM3MDE0ZWZlMGYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jz_GrwnjQZA4aTubj3mRGUHjSFm6mu9ZMNqhuhdSw78';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = () => async dispatch => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    );

    dispatch({type: 'SET_MOVIES', payload: response.data.results});
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
