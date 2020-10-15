import {combineReducers} from 'redux';
import page from './page/reducer';

const player = combineReducers({
	page,
});

export default player;
