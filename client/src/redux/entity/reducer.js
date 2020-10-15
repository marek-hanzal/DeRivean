import {combineReducers} from 'redux';
import page from './page/reducer';

const entity = combineReducers({
	page,
});

export default entity;
