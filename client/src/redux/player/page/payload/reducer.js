import {handleActions} from 'redux-actions';
import {onPlayerPageSuccess} from './action';

const payload = handleActions({
	[onPlayerPageSuccess]: (state, {payload}) => payload,
}, null);

export default payload;
