import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import UserFetchRedux from "redux/user/fetch/redux";

const useUserFetch = (uuid = null) => {
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => dispatch(UserFetchRedux.fetch(uuid || params.user)), [dispatch, params.user, uuid]);
};

export default useUserFetch;
