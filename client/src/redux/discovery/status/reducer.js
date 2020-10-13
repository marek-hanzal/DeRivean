import {handleActions} from 'redux-actions';
import {onDiscoveryStatus} from './action';

const status = handleActions({
	[onDiscoveryStatus]: (state, {payload}) => payload,
}, false);

export default status;
