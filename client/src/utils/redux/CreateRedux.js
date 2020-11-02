import {combineReducers} from "redux";

function CreateRedux(redux) {
	return {
		redux,
		reducer: function () {
			return combineReducers(Object.entries(this.redux).reduce((item, [action, redux]) => ({...item, [action]: redux.reducer()}), {}));
		}
	};
}

export default CreateRedux;
