import { View, Modal } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../services/config.json';

return (
	<Modal visible={props.isVisible} animationType={'slide'}>
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Course Goal!"
				style={styles.input}
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
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
