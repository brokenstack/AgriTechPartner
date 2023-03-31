import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	StyleSheet,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	ToastAndroid,
} from 'react-native';
import {RootStackParamList} from '../../../App';
import {StatusIndicator} from '../../components/ActivityIndicator';
import OutlinedTextField from '../../components/OutlinedTextField';
import PasswordInput from '../../components/PasswordField';
import {loginPlant} from '../../helper/database';
import {Plant} from '../../helper/models';
import {useCredentialsStore} from '../../store/main';

type LoginPageProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginPage: React.FC<LoginPageProps> = ({navigation}) => {
	const plantID = useCredentialsStore(state => state.plantID);
	const setPlantID = useCredentialsStore(state => state.setPlantID);
	const password = useCredentialsStore(state => state.password);
	const setPassword = useCredentialsStore(state => state.setPassword);

	const [loading, setLoading] = useState(false);

	const handlePress = () => {
		Keyboard.dismiss();
	};

	return (
		<View
			style={{
				margin: 0,
				justifyContent: 'flex-start',
				flex: 1,
				padding: 15,
			}}>
			{loading && <StatusIndicator message="Loading..." />}

			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.form_container}>
				<ScrollView>
					<Image
						style={styles.logo}
						source={require('../../../assets/warehouse_illustration.png')}
					/>
					<Text style={styles.heading}>AgriTech Partner</Text>
					<Text style={styles.subheading}>Partner Login</Text>
					<TouchableWithoutFeedback onPress={handlePress}>
						<View>
							<OutlinedTextField
								label="Login ID"
								placeholder="Enter plant ID"
								onChangeText={id => setPlantID(id)}
							/>
							<PasswordInput
								label="Password"
								placeholder="Enter password"
								onChangeText={password => {
									setPassword(password);
								}}
							/>
							<Text style={{textAlign: 'right', marginBottom: 8}}>
								Forgot Password?
							</Text>
							<TouchableOpacity
								style={styles.button}
								disabled={loading}
								onPress={async () => {
									setLoading(true);
									const plant: {
										loginStatus: boolean;
										error?: string;
										plant?: Plant;
									} = await loginPlant(plantID, password);

									if (!plant.loginStatus) {
										ToastAndroid.show(
											plant.error!!,
											ToastAndroid.LONG,
										);
									}
									// handle navigation to home page & sharedPref
									setLoading(false);
									if (plant.loginStatus) {
										await AsyncStorage.setItem(
											'LOGIN',
											'true',
										);
										navigation.navigate('HomeScreen');
									}
								}}
								activeOpacity={0.6}>
								<Text style={styles.buttonText}>Continue</Text>
							</TouchableOpacity>
						</View>
					</TouchableWithoutFeedback>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	logo: {
		width: 300,
		height: 300,
		alignSelf: 'center',
		marginTop: 20,
	},
	heading: {
		fontSize: 38,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subheading: {
		fontSize: 30,
		marginTop: 50,
		fontWeight: '800',
	},
	form_container: {
		marginTop: 15,
	},
	button: {
		borderRadius: 8,
		backgroundColor: '#007AFF',
		paddingVertical: 15,
		marginTop: 8,
	},
	buttonText: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	indicatorContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	message: {
		marginTop: 16,
		fontSize: 16,
		color: '#ffffff',
	},
});

export default LoginPage;
