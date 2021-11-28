import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LocationItem = (props) => {
	React.useContext;

	const item = props.item;
	console.log(item);

	const selectHandler = () => {
		props.navigation('Detailed View', { item: item });
	};

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={selectHandler}>
			<View style={styles.listItem}>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		height: 40,
		paddingStart: 30,
		width: '70%',
		backgroundColor: '#1c1f1d',
		borderColor: 'green',
		borderTopWidth: 2,
		borderBottomWidth: 2,
		marginTop: 7,
	},
	title: {
		fontSize: 23,
		color: 'white',
	},
});

export default LocationItem;
