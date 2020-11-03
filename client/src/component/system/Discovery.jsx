import {useState} from "react";
import {useDiscovery} from "redux/discovery/redux";
import DiscoveryErrorView from "view/DiscoveryErrorView";
import LoaderView from "view/LoaderView";

const Discovery = ({children}) => {
	const [status, setStatus] = useState();
	useDiscovery(() => {
		setStatus(true);
	}, () => {
		setStatus(false);
	});
	switch (status) {
		case true:
			return children;
		case false:
			return <DiscoveryErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export default Discovery;
