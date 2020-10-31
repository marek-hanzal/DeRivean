import {useEffect} from "react";
import {useDispatch} from "react-redux";
import BuildingRedux from "redux/building/redux";

const useBuildingFetch = (uuid, then = () => ({})) => {
	const dispatch = useDispatch();
	// eslint-disable-next-line
	useEffect(() => dispatch(BuildingRedux.redux.fetch.dispatch.fetch(uuid)).then(then), [dispatch, uuid]);
};

export default useBuildingFetch;
