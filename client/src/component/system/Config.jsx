import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ClientRedux from "redux/client/redux";
import ClientErrorView from "view/ClientErrorView";
import LoaderView from "view/LoaderView";

const Client = ({children, href = "/client.json"}) => {
	const dispatch = useDispatch();
	const status = useSelector(ClientRedux.selector.getStatus);
	useEffect(() => dispatch(ClientRedux.fetch(href)), [dispatch, href]);
	switch (status) {
		case "SUCCESS":
			return children;
		case "FAILURE":
			return <ClientErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export default Client;
