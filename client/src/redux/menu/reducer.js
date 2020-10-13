import {combineReducers} from 'redux';
import collapse from './collapse/reducer';
import open from './open/reducer';

const menu = combineReducers({
	collapse,
	open,
});

export default menu;
