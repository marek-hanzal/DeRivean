import {combineReducers} from "redux";
import client from "./client/reducer";
import discovery from "./discovery/reducer";
import entity from "./entity/reducer";
import loading from "./loading/reducer";
import menu from "./menu/reducer";
import player from "./player/reducer";
import user from "./user/reducer";

export default combineReducers({
	client,
	discovery,
	loading,
	menu,
	player,
	entity,
	user,
});
