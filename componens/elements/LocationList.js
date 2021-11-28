import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { fetchPlaces } from '../services/DatabaseService';
import LocationItem from './LocationItem';
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
				contentContainerStyle={styles.listStyle}
				keyExtractor={(item) => item.title}
				data={locationList}
				renderItem={(itemData) => {
					console.log(itemData);
					return <LocationItem item={itemData.item} />;
				}}></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: '#000000',
		height: '100%',
	},
	listStyle: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexGrow: 1,
	},
});
const listStyle = StyleSheet.create({});

export default LocationList;
