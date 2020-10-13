import {handleActions} from 'redux-actions';
import {onClientSuccess} from './action';

const payload = handleActions({
	[onClientSuccess]: (state, {payload}) => payload,
}, {});

export default payload;
