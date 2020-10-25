import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDiscoveryHref} from "redux/client/selector";
import {onDiscovery} from "redux/discovery/action";
import {getDiscoveryStatus} from "redux/discovery/selector";
import DiscoveryErrorView from "view/DiscoveryErrorView";
import LoaderView from "view/LoaderView";

const Discovery = ({children}) => {
	const dispatch = useDispatch();
	const status = useSelector(getDiscoveryStatus);
	const href = useSelector(getDiscoveryHref);
	useEffect(() => dispatch(onDiscovery(href)), [dispatch, href]);
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
