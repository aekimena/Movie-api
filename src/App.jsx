import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MovieCard from './components/MovieCard';
import MovieSkeleton from './components/MovieSkeleton';
import Styles from './components/Styles';
import {ApiKey} from '../ApiKey';

const API_URL = `http://www.omdbapi.com/?apikey=${ApiKey}`;
const App = () => {
  const [movies, setMovies] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    const searchMovies = async title => {
      try {
        textSearch == '' ? null : setIsLoading(true);
        const response = await fetch(`${API_URL}&s=${title}`);
        if (!response.ok) throw new Error('No data received');
        const data = await response.json();

        setMovies(data.Search);

        setFetchErr(null);
      } catch (error) {
        setFetchErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => searchMovies(textSearch))();
  }, [textSearch]);

  return (
    <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
      <View style={Styles.titleHeader}>
        <Icon name="bars" size={35} color="#fff" />
        <Text style={Styles.title}>MovieWorld</Text>
      </View>
      <View
        style={{
          marginTop: 5,
          margin: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={Styles.searchBox}
          placeholder="Search MovieWorld"
          placeholderTextColor={'#000'}
          onChangeText={newText => setTextSearch(newText)}
          defaultValue={textSearch}
        />
        <View style={{position: 'absolute', right: 0}}>
          {textSearch == '' ? (
            <Icon
              name="magnifying-glass"
              size={22}
              color="#000"
              style={{padding: 12}}
            />
          ) : (
            <TouchableOpacity onPress={() => setTextSearch('')}>
              <Icon name="xmark" size={26} color="#000" style={{padding: 12}} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ScrollView>
        {isLoading && <MovieSkeleton />}
        {(fetchErr || movies == null || movies?.length <= 0) && !isLoading && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 500,
            }}>
            <Icon size={85} color={'#555'} name="video-slash" />
            <Text
              style={{
                color: '#777',
                padding: 10,
                fontSize: 17,
              }}>
              {textSearch == ''
                ? 'No movies to show'
                : `Couldn't find "${textSearch}"`}
            </Text>
          </View>
        )}
        {!fetchErr && !isLoading && movies?.length > 0 && (
          <View
            style={{
              marginTop: 10,
              margin: 20,
            }}>
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
