import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { fetchPlaces } from '../services/DatabaseService';
/* weather should be touchable sending user to detailed view */
const LocationList = () => {
	const [locationList, setLocationList] = React.useState([]);
	React.useEffect(() => {
		fetchPlaces().then((dbResult) => {
			console.log(dbResult.rows._array);
			setLocationList(dbResult.rows._array);
		});
	}, []);
	/*get date as key*/
	return (
		<View style={styles.view}>
			<FlatList
				keyExtractor={(item) => item}
				data={locationList}
				renderItem={(itemData) => {
					return <WeatherItem data={itemData.item} />;
				}}></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	view: { backgroundColor: '#000000', height: '100%' },
});

export default LocationList;
