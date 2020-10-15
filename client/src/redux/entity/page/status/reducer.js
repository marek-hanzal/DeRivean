import {handleActions} from 'redux-actions';
import {onEntityPageStatus} from './action';

const status = handleActions({
	[onEntityPageStatus]: (state, {payload}) => payload,
}, null);

export default status;
