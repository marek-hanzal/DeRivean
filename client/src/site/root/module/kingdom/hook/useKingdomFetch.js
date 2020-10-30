import {useEffect} from "react";
import {useDispatch} from "react-redux";
import KingdomFetchRedux from "redux/kingdom/fetch/redux";

const useKingdomFetch = (uuid, then = () => ({})) => {
	const dispatch = useDispatch();
	// eslint-disable-next-line
	useEffect(() => dispatch(KingdomFetchRedux.fetch(uuid)).then(then), [dispatch, uuid]);
};

export default useKingdomFetch;
