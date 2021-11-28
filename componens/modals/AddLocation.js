import React from 'react';
import { View, Modal, StyleSheet, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../services/config.json';
const AddLocation = (props) => {
	const [selectedPlace, setSelectedPlace] = React.useState({});

	return (
		<Modal visible={props.isVisible} animationType={'slide'}>
			<View style={styles.modalView}>
				<View style={styles.inputContainer}>
					<GooglePlacesAutocomplete
						styles={autoCompleteBoxStyles}
						fetchDetails={true}
						GooglePlacesDetailsQuery={{ fields: 'geometry' }}
						minLength={3}
						enablePoweredByContainer={false}
						placeholder="Search for location"
						onPress={(data, details) => {
							setSelectedPlace({
								lat: details.geometry.location.lat,
								lng: details.geometry.location.lng,
							});
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
					<View style={styles.buttonWrapper}>
						<Button
							onPress={() => props.onAdd(selectedPlace)}
							title={'ADD'}
							color={'green'}
						/>
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
		height: '85%',
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
		paddingLeft: 10,
		paddingTop: 10,
	},
});

const autoCompleteBoxStyles = StyleSheet.create({
	textInputContainer: {
		flexGrow: 1,
		width: '80%',
	},
});