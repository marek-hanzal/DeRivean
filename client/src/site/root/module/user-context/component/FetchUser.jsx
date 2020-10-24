import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {onUserFetch} from "redux/user/fetch/action";

const FetchUser = ({children, uuid = null}) => {
	const params = useParams();
	const dispatch = useDispatch();
	useEffect(() => dispatch(onUserFetch(uuid || params.user)), [dispatch, params.user, uuid]);
	return children;
};

export default FetchUser;
