import {useEffect} from "react";
import {useDispatch} from "react-redux";
import UserRedux from "redux/user/redux";

const useUserFetch = (uuid, then = () => ({})) => {
	const dispatch = useDispatch();
	// eslint-disable-next-line
	useEffect(() => dispatch(UserRedux.redux.fetch.dispatch.fetch(uuid)).then(then), [dispatch, uuid]);
};

export default useUserFetch;
