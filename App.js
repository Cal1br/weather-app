import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationView from './componens/views/LocationView';
import DetailedView from './componens/views/DetailedView';
import { init } from './componens/services/DatabaseService';

init()
	.then(() => {
		console.log('Database initialization complete!');
	})
	.catch((err) => {
		console.log('Database initialization failed');
		console.error(err);
	});

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Location View" component={LocationView} />
				<Stack.Screen name="Detailed View" component={DetailedView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
