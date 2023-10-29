import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MovieSkeleton = () => {
  return (
    <View style={{margin: 20}}>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.image}></View>
        <View style={styles.info}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#b0b0b0',
    width: '100%',
    height: 350,
  },
  info: {
    // padding: 20,
    height: 100,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#a0a0a0',
  },
});

export default MovieSkeleton;
