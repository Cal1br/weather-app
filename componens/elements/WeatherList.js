import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

/* weather should be touchable sending user to detailed view */
const WeatherList = () => {
	const [weatherList, setWeatherList] = React.useState([]);
	React.useEffect(() => {
		//get weather data from api
	}, []);
	/*get date as key*/
	return (
		<View style={styles.view}>
			<FlatList
				keyExtractor={(item) => item}
				data={weatherList}
				renderItem={(itemData) => {
					return <WeatherItem data={itemData.item} />;
				}}></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	view: { backgroundColor: '#000000', height: '100%' },
});

export default WeatherList;
