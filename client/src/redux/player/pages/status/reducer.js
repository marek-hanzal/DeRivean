import {handleActions} from 'redux-actions';
import {onPlayerPagesStatus} from './action';

const status = handleActions({
	[onPlayerPagesStatus]: (state, {payload}) => payload,
}, null);

export default status;
