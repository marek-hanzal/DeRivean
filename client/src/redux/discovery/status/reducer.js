import {handleActions} from 'redux-actions';
import {onStatus} from './action';

const status = handleActions({
	[onStatus]: (state, {payload}) => payload,
}, false);

export default status;
