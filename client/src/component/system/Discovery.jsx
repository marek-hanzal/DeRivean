import ClientContext from "component/system/ClientContext";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useState} from "react";
import {useDiscovery} from "redux/discovery/redux";
import DiscoveryErrorView from "view/DiscoveryErrorView";
import LoaderView from "view/LoaderView";

const Discovery = ({children}) => {
	const [status, setStatus] = useState();
	const [discovery, setDiscovery] = useState();
	const client = useContext(ClientContext);
	useDiscovery(client, discovery => {
		setDiscovery(discovery);
		setStatus(true);
	}, () => {
		setStatus(false);
	});
	switch (status) {
		case true:
			return (
				<DiscoveryContext.Provider value={discovery}>
					{children}
				</DiscoveryContext.Provider>
			);
		case false:
			return <DiscoveryErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export default Discovery;
