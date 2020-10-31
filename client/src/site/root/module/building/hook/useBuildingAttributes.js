import {useEffect} from "react";
import {useDispatch} from "react-redux";
import BuildingRedux from "redux/building/redux";

const useBuildingAttributes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(BuildingRedux.redux.attributes.dispatch.attributes());
	}, [dispatch]);
};

export default useBuildingAttributes;
