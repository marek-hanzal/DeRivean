import {useEffect} from "react";
import {useDispatch} from "react-redux";
import KingdomRedux from "redux/kingdom/redux";

const useKingdomAttributes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(KingdomRedux.redux.attributes.dispatch.attributes());
	}, [dispatch]);
};

export default useKingdomAttributes;
