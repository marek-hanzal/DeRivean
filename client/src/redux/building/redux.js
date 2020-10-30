import {combineReducers} from "redux";
import BuildingAttributesRedux from "redux/building/attributes/redux";
import BuildingCreateRedux from "redux/building/create/redux";
import BuildingFetchRedux from "redux/building/fetch/redux";
import BuildingPageRedux from "redux/building/page/redux";
import BuildingUpdateRedux from "redux/building/update/redux";

const BuildingRedux = {
	reducer: () => combineReducers({
		attributes: BuildingAttributesRedux.reducer(),
		create: BuildingCreateRedux.reducer(),
		update: BuildingUpdateRedux.reducer(),
		page: BuildingPageRedux.reducer(),
		fetch: BuildingFetchRedux.reducer(),
	}),
	selector: {
		branch: state => state.building,
	},
};

export default BuildingRedux;
