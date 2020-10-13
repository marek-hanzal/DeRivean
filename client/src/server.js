import axios from 'axios';

export const Server = axios.create({
	baseURL: process.env.REACT_APP_BACKEND,
	responseType: 'json',
});

export const PageLimit = (limit, config = {params: {}}) => ({params: {limit, ...config.params}});
