import {handleActions} from 'redux-actions';
import {onPlayerPageStatus} from './action';

const status = handleActions({
	[onPlayerPageStatus]: (state, {payload}) => payload,
}, null);

export default status;
