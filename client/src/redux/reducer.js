import {combineReducers} from 'redux';
import client from './client/reducer';
import discovery from './discovery/reducer';
import loading from './loading/reducer';
import menu from './menu/reducer';
import player from './player/reducer';

export default combineReducers({
	client,
	discovery,
	loading,
	menu,
	player,
});
