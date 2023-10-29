import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const MovieCard = ({movie}) => {
  return (
    <View style={{marginTop: 30, position: 'relative'}}>
      <Icon
        name="plus"
        size={35}
        color={'#fff'}
        style={{
          position: 'absolute',
          zIndex: 20,
          right: 0,
          padding: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderBottomLeftRadius: 15,
        }}
      />
      <Image
        source={{
          uri:
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400',
        }}
        style={{
          resizeMode: 'contain',
          borderRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          width: '100%',
          height: 350,
        }}
      />
      <View
        style={{
          backgroundColor: '#222222',
          padding: 20,
          borderRadius: 20,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: '70%'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 19,
            }}>
            {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              marginTop: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            {movie.Title}
          </Text>
        </View>
        <View>
          <Text style={{color: '#fff', fontSize: 19}}>{movie.Year}</Text>
        </View>
      </View>
    </View>
  );
};
export default MovieCard;
