import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from './HomeScreen';
import {SettingsScreen} from './SettingsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailsStack = createBottomTabNavigator<DetailsTabParamList>();

type DetailsTabParamList = {
	[key: string]: undefined;
	Home: undefined;
	Settings: undefined;
};

type TabBarIconProps = {
	focused: boolean;
	color: string;
	size: number;
};

export const Home = () => {
	return (
		<DetailsStack.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
					let iconName: string;

					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'settings' : 'settings-outline';
					} else {
						iconName = 'settings';
					}

					return <Icon name={iconName} size={size} color={color} />;
				},

				tabBarLabelStyle: {
					fontWeight: 'bold',
					textTransform: 'uppercase',
					marginBottom: 5,
					minWidth: 100,
				},

				tabBarStyle: {
					height: 60, // specify the desired height here
				},
			})}>
			<DetailsStack.Screen
				name="Home"
				component={HomePage}
				options={{headerShown: false}}
			/>
			<DetailsStack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{headerShown: false}}
			/>
		</DetailsStack.Navigator>
	);
};
