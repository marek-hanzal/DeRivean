import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {SessionRedux} from "redux/session/redux";

const SessionExpiredView = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(SessionRedux.close());
	}, [dispatch]);
	return null;
};

export default SessionExpiredView;
