import { View, Modal } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../services/config.json';
const AddLocation = (props) => {
	return (
		<Modal visible={props.isVisible} animationType={'slide'}>
			<View style={styles.inputContainer}>
				{/* important reminder, style is an object, so double curly braces */}
				<GooglePlacesAutocomplete
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
		</Modal>
	);
};

export default AddLocation;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
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
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		width: '40%',
	},
});
