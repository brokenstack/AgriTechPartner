import {Text, View, Image, StyleSheet} from 'react-native';

export const SettingsScreen = () => {
	return (
		<View style={{flex: 1}}>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require('../../../assets/404.png')}
				/>
			</View>
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
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
