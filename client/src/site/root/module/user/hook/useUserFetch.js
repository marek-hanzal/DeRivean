import {useEffect} from "react";
import {useDispatch} from "react-redux";
import UserFetchRedux from "redux/user/fetch/redux";

const useUserFetch = (uuid, then = () => ({})) => {
	const dispatch = useDispatch();
	// eslint-disable-next-line
	useEffect(() => dispatch(UserFetchRedux.fetch(uuid)).then(then), [dispatch, uuid]);
};

export default useUserFetch;
