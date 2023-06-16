import axios from 'axios';

const configurations = {
	TWITTER: process.env.NEXT_PUBLIC_API_TWITTER,
};

export const apiTwitter = axios.create({
	baseURL: configurations.TWITTER,
	headers: {
		Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
	},
	auth: {
		username: process.env.ACCESS_TOKEN_SECRET1,
		password: process.env.ACCESS_TOKEN_SECRET,
	},
});
