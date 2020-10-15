import {combineReducers} from 'redux';
import payload from './payload/reducer';
import status from './status/reducer';

const page = combineReducers({
	status,
	payload,
});

export default page;
