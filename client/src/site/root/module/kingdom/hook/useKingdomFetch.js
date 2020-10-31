import {useEffect} from "react";
import {useDispatch} from "react-redux";
import KingdomRedux from "redux/kingdom/redux";

const useKingdomFetch = (uuid, then = () => ({})) => {
	const dispatch = useDispatch();
	// eslint-disable-next-line
	useEffect(() => dispatch(KingdomRedux.redux.fetch.dispatch.fetch(uuid)).then(then), [dispatch, uuid]);
};

export default useKingdomFetch;
