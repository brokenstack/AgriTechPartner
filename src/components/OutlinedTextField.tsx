import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface OutlinedTextFieldProps {
	label: string;
	placeholder: string;
	onChangeText: (text: string) => void;
}

const OutlinedTextField = ({
	label,
	placeholder,
	onChangeText,
}: OutlinedTextFieldProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={[styles.textInput, isFocused && styles.focusedTextInput]}
				onChangeText={onChangeText}
				onFocus={handleFocus}
				placeholder={placeholder}
				onBlur={handleBlur}
				placeholderTextColor="#999"
				underlineColorAndroid="transparent"
			/>
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
	textInput: {
		borderWidth: 1,
		borderColor: '#999',
		borderRadius: 8,
		paddingHorizontal: 16,
		paddingVertical: 12,
		fontSize: 16,
		color: '#333',
	},
	focusedTextInput: {
		borderColor: '#007AFF',
	},
});

export default OutlinedTextField;
