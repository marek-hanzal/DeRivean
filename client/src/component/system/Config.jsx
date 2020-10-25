import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onClient} from "redux/client/action";
import {getClientStatus} from "redux/client/selector";
import ClientErrorView from "view/ClientErrorView";
import LoaderView from "view/LoaderView";

const Client = ({children, href = "/client.json"}) => {
	const dispatch = useDispatch();
	const status = useSelector(getClientStatus);
	useEffect(() => dispatch(onClient(href)), [dispatch, href]);
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
