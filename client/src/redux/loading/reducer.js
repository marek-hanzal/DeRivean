import {handleActions} from 'redux-actions';
import {onLoading} from './action';

const loading = handleActions({
	[onLoading]: (state, {payload}) => payload,
}, false);

export default loading;
