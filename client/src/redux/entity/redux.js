import {combineReducers} from "redux";
import EntityPage from "redux/entity/page/redux";

const EntityRedux = {
	reducer: () => combineReducers({
		page: EntityPage.reducer(),
	}),
	selector: {
		branch: state => state.entity,
	},
};

export default EntityRedux;
