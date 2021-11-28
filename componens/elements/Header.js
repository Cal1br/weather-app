import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import AddLocation from '../modals/AddLocation';

/* TODO maybe make the button SVG */
const Header = (props) => {
	const [isAddMode, setIsAddMode] = React.useState('');

	const locationAddHandler = (locationObject) => {
		if (locationObject.lat && locationObject.lng) {
			console.log('obj is not empty');
		}
		console.log(locationObject);
	};
	return (
		<View style={styles.headerStyle}>
			<Text style={styles.headerTitle}>{props.title}</Text>
			<TouchableOpacity
				style={{ flexGrow: 1 }}
				onPress={() => setIsAddMode(true)}>
				<View style={styles.buttonHolder}>
					<Text style={styles.buttonText}>+</Text>
				</View>
			</TouchableOpacity>
			<AddLocation
				isVisible={isAddMode}
				onCancel={() => setIsAddMode(false)}
				onAdd={locationAddHandler}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		flexDirection: 'row',
		width: '100%',
		height: 45,
		backgroundColor: '#1c1f1d',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 2,
	},
	headerTitle: {
		textAlign: 'center',
		textAlignVertical: 'center',
		borderColor: 'black',
		color: 'white',
		borderWidth: 2,
		flexGrow: 10,
		height: 90,
	},
	buttonHolder: {
		width: '100%',
		flexGrow: 1,
	},
	buttonText: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'white',
		fontSize: 25,
	},
});
export default Header;
