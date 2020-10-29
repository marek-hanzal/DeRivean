import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import KingdomFetchRedux from "redux/kingdom/fetch/redux";

const useKingdomFetch = (uuid = null, then = () => ({})) => {
	const dispatch = useDispatch();
	const params = useParams();
	// eslint-disable-next-line
	useEffect(() => dispatch(KingdomFetchRedux.fetch(uuid || params.kingdom)).then(then), [dispatch, params.kingdom, uuid]);
};

export default useKingdomFetch;
