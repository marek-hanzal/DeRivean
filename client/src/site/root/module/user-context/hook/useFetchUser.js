import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {onUserFetch} from "redux/user/fetch/action";

const useFetchUser = (uuid = null) => {
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => dispatch(onUserFetch(uuid || params.user)), [dispatch, params.user, uuid]);
};

export default useFetchUser;
