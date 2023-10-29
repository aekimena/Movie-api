import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  titleHeader: {
    margin: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'Satisfy-Regular',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 25,
  },
  searchBox: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#000',
    padding: 10,
    fontSize: 22,
    flex: 1,
    position: 'relative',
  },
});

export default Styles;
