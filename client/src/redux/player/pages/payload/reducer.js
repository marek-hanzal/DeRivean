import {handleActions} from 'redux-actions';
import {onPlayerPagesSuccess} from './action';

const payload = handleActions({
	[onPlayerPagesSuccess]: (state, {payload}) => payload,
}, null);

export default payload;
