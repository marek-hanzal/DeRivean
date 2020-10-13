import {handleActions} from 'redux-actions';
import {onOpenMenu} from './action';

const open = handleActions({
	[onOpenMenu]: (state, {payload}) => payload,
}, null);

export default open;
