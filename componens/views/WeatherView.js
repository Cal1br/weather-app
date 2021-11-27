import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherList from '../elements/WeatherList';
/* IDEA може да използвам базата за да покажа дали някое
 от predictionite се е променило, afaik няма такова нещо до сега */
const Header = () => {
  return (
    <View styles={styles.weatherView}>
      <WeatherList />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherView: {
    width: '100%',
    height: '100%',
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    height: 90,
  },
});
export default Header;
