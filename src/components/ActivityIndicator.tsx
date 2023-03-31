import {Text, View, ActivityIndicator} from 'react-native';

export const StatusIndicator = ({message}: {message: string}) => {
	return (
		<View
			style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				zIndex: 9999,
			}}>
			<ActivityIndicator size="large" color="#fff" />
			<Text style={{textAlign: 'center', color: 'white', marginTop: 2}}>
				{message}.
			</Text>
		</View>
	);
};
