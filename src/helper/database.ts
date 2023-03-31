import firestore from '@react-native-firebase/firestore';
import {Plant} from './models';

export const loginPlant = async (
	plantID: string,
	password: string,
): Promise<{loginStatus: boolean; error?: string; plant?: Plant}> => {
	const querySnapshot = await firestore()
		.collection('Plants')
		.where('plant_id', '==', plantID)
		.where('password', '==', password)
		.get();

	querySnapshot.docs.forEach(doc => {
		console.log(doc.data());
	});
	if (querySnapshot.docs.length > 1) {
		return {loginStatus: false, error: 'Something went wrong!'};
	} else if (querySnapshot.docs.length == 0) {
		return {
			loginStatus: false,
			error: 'Invalid plant id or password!',
		};
	}

	const plant = querySnapshot.docs[0].data() as Plant;
	return {loginStatus: true, plant: plant};
};
