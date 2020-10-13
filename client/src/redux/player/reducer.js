import {combineReducers} from 'redux';
import pages from './pages/reducer';

const player = combineReducers({
	pages,
});

export default player;
