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
} from 'react-native';
import OutlinedTextField from '../../components/OutlinedTextField';
import PasswordInput from '../../components/PasswordField';

const LoginPage = () => {
	const handlePress = () => {
		Keyboard.dismiss();
	};

	return (
		<View style={{margin: 15, justifyContent: 'flex-start'}}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.form_container}>
				<ScrollView>
					<Image
						style={styles.logo}
						source={require('../../../assets/logo.png')}
					/>
					<Text style={styles.heading}>AgriTech Partner</Text>
					<Text style={styles.subheading}>Partner Login</Text>
					<TouchableWithoutFeedback onPress={handlePress}>
						<View>
							<OutlinedTextField
								label="Login ID"
								placeholder="Enter plant ID"
								onChangeText={(text: string) => {}}
							/>
							<PasswordInput
								label="Password"
								placeholder="Enter password"
								onChangeText={() => {}}
							/>
							<Text style={{textAlign: 'right', marginBottom: 8}}>
								Forgot Password?
							</Text>
							<TouchableOpacity
								style={styles.button}
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
});

export default LoginPage;
