import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ClientRedux from "redux/client/redux";
import DiscoveryRedux from "redux/discovery/redux";
import DiscoveryErrorView from "view/DiscoveryErrorView";
import LoaderView from "view/LoaderView";

const Discovery = ({children}) => {
	const dispatch = useDispatch();
	const status = useSelector(DiscoveryRedux.selector.status);
	const href = useSelector(ClientRedux.selector.getDiscoveryHref);
	useEffect(() => dispatch(DiscoveryRedux.fetch(href)), [dispatch, href]);
	switch (status) {
		case "SUCCESS":
			return children;
		case "FAILURE":
			return <DiscoveryErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export default Discovery;
