/**
 * @format
 */

import {NavigationContainer, StackActions} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginPage from './src/views/auth/Login';
import {Home} from './src/views/home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export interface RootStackParamList {
	[key: string]: undefined;
	Login: undefined;
	HomeScreen: undefined;
}

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : 'white',
		flex: 1,
	};

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// F this for now
	useEffect(() => {
		async function checkLoginStatus() {
			const loginStatus = await AsyncStorage.getItem('LOGIN');
			if (loginStatus) {
				setIsLoggedIn(true);
			}
		}
		checkLoginStatus();
	}, []);

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<NavigationContainer>
				<Stack.Navigator>
					{isLoggedIn ? (
						<Stack.Screen
							name="HomeScreen"
							component={Home}
							options={{headerShown: false}}
						/>
					) : (
						<Stack.Screen
							name="Login"
							component={LoginPage}
							options={{headerShown: false}}
						/>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

export default App;
