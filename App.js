import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationView from './componens/views/LocationView';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="LocationView" component={LocationView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
