import React from 'react';
import { View, Modal, StyleSheet, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../services/config.json';
const AddLocation = (props) => {
	return (
		<Modal visible={props.isVisible} animationType={'slide'}>
			<View style={styles.modalView}>
				<View style={styles.inputContainer}>
					<GooglePlacesAutocomplete
						styles={autoCompleteBoxStyles}
						minLength={3}
						placeholder="Search for location"
						onPress={(data, details = null) => {
							// 'details' is provided when fetchDetails = true
							console.log(data, details);
						}}
						query={{
							key: config.googleKey,
							language: 'en',
						}}
					/>
				</View>
				<View style={styles.buttonHolder}>
					<View style={styles.buttonWrapper}>
						<Button onPress={props.onCancel} title={'CANCEL'} color={'red'} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default AddLocation;

const styles = StyleSheet.create({
	modalView: { backgroundColor: '#000000', flexGrow: 1 },

	inputContainer: {
		height: '80%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%',
		color: 'black',
		marginBottom: 10,
	},
	buttonHolder: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonWrapper: {
		width: '45%',
	},
});

const autoCompleteBoxStyles = StyleSheet.create({
	textInputContainer: {
		flexGrow: 1,
		width: '80%',
	},
});