import {create} from 'zustand';

interface CredentialState {
	plantID: string;
	password: string;
	setPlantID: (to: string) => void;
	setPassword: (to: string) => void;
}

export const useCredentialsStore = create<CredentialState>()(set => ({
	plantID: '',
	password: '',
	setPlantID: to => set(() => ({plantID: to})),
	setPassword: to => set(() => ({password: to})),
}));
