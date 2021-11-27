import { View } from 'react-native';

const DetailedView = (props) => {
	return (
		<View styles={styles.weatherView}>
			<Header title={props.locationName} />
			<View></View>
		</View>
	);
};
export default DetailedView;
