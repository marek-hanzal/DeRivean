import {combineReducers} from 'redux';
import payload from './payload/reducer';
import status from './status/reducer';

const client = combineReducers({
	status,
	payload,
});

export default client;
