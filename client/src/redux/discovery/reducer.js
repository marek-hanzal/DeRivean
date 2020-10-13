import {combineReducers} from 'redux';
import payload from './payload/reducer';
import status from './status/reducer';

const discovery = combineReducers({
	status,
	payload,
});

export default discovery;
