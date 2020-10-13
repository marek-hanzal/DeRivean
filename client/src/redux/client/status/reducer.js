import {handleActions} from 'redux-actions';
import {onClientStatus} from './action';

const status = handleActions({
	[onClientStatus]: (state, {payload}) => payload,
}, null);

export default status;
