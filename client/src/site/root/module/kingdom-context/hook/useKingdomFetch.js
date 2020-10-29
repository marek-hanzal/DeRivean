import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import KingdomFetchRedux from "redux/kingdom/fetch/redux";

const useKingdomFetch = (uuid = null) => {
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => dispatch(KingdomFetchRedux.fetch(uuid || params.kingdom)), [dispatch, params.kingdom, uuid]);
};

export default useKingdomFetch;
