import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUniqueId} from 'react-native-device-info';

// export const baseURL = 'https://testingbyniraj.saars.in/api/'
export const http2 = process.env.BUCKET_URL

const http = axios.create({
	baseURL: process.env.BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		// ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
	},
});

http.interceptors.request.use(
	async (config) => {
		let token = await AsyncStorage.getItem('@USER_TOKEN');
	    // if(token) token = JSON.parse(token).token
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject("Api error ",error);
	},
);
export default http;
