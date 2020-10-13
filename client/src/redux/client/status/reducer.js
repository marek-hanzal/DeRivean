import {handleActions} from 'redux-actions';
import {onStatus} from './action';

const status = handleActions({
	[onStatus]: (state, {payload}) => payload,
}, null);

export default status;
