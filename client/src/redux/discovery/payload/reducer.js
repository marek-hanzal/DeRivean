import {handleActions} from 'redux-actions';
import {onDiscoverySuccess} from './action';

const payload = handleActions({
	[onDiscoverySuccess]: (state, {payload}) => payload,
}, {});

export default payload;
