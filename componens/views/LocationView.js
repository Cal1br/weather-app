import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../elements/Header';
import LocationList from '../elements/LocationList';
/* IDEA може да използвам базата за да покажа дали някое
 от predictionite се е променило, afaik няма такова нещо до сега */
const LocationView = () => {
	return (
		<View styles={styles.weatherView}>
			<Header title={'My Locations'} />
			<LocationList />
		</View>
	);
};

const styles = StyleSheet.create({
	weatherView: {
		width: '100%',
		height: '100%',
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default LocationView;
