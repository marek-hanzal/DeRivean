import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const commonFetchHook = (redux) => {
	return (uuid, onSuccess = data => data, onFailure = error => error) => {
		const dispatch = useDispatch();
		useEffect(() => {
			const cancelToken = axios.CancelToken.source();
			dispatch(redux.redux.fetch.dispatch.fetch(uuid)).then(user => {
				onSuccess(user);
			}, error => {
				if (error.cancel) {
					return;
				}
				onFailure(error);
			});
			return () => cancelToken.cancel();
			// eslint-disable-next-line
		}, [dispatch, uuid]);
	};
};

export default commonFetchHook;
