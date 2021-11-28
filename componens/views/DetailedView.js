import React from 'react';
import { Text, View } from 'react-native';

const DetailedView = (props) => {
	const item = props.item;
	return (
		<View styles={styles.weatherView}>
			<Text>{item.title}</Text>
			<Text>{item.lat}</Text>
			<Text>{item.lng}</Text>
		</View>
	);
};
export default DetailedView;
