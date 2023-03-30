import React, {useState} from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PasswordFieldProps {
	label: string;
	placeholder: string;
	onChangeText: (text: string) => void;
}

const PasswordInput = ({
	label,
	placeholder,
	onChangeText,
}: PasswordFieldProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	const toggleShowPassword = () => setShowPassword(!showPassword);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={[
						styles.textInput,
						isFocused && styles.focusedTextInput,
					]}
					placeholder={placeholder}
					onChangeText={onChangeText}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholderTextColor="#999"
					underlineColorAndroid="transparent"
					secureTextEntry={!showPassword}
				/>
				<TouchableOpacity
					onPress={toggleShowPassword}
					style={styles.iconButton}>
					<Icon
						name={showPassword ? 'eye-off' : 'eye'}
						size={24}
						color="#999"
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},
	label: {
		marginBottom: 8,
		fontSize: 16,
		fontWeight: 'bold',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#999',
		borderRadius: 8,
		paddingHorizontal: 16,
	},
	textInput: {
		flex: 1,
		fontSize: 16,
		color: '#333',
	},
	focusedTextInput: {
		borderColor: '#007AFF',
	},
	iconButton: {
		marginLeft: 8,
	},
});

export default PasswordInput;
