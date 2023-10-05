// MovieList.js
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from './actions/movies';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <View>
      <Button title="Fetch Movies" onPress={() => dispatch(fetchMovies())} />
      {movies.map(movie => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  );
};

export default MovieList;
