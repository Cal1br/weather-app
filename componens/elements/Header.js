import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AddLocation from '../modals/AddLocation';

const Header = () => {
	const [isAddMode, setIsAddMode] = React.useState('');
	return (
		<View styles={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
			<View style={styles.buttonHolder}>
				<Button title={'+'} onPress={() => setIsAddMode(true)} />
			</View>
			<AddLocation isVisible={isAddMode} />
		</View>
	);
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    header: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    height: 90,
  },
});
export default Header;
