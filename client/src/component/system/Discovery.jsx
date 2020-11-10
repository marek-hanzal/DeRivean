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

	function link(id) {
		if (!discovery[id]) {
			throw new Error(`Cannot resolve link from Discovery for linkId [${id}]`);
		}
		return discovery[id].link;
	}

	useDiscovery(client, discovery => {
		setDiscovery(discovery);
		setStatus(true);
	}, () => {
		setStatus(false);
	});

	switch (status) {
		case true:
			return (
				<DiscoveryContext.Provider
					value={{
						discovery,
						link,
						fetch: (id, replace, uuid) => link(id).replace(replace, uuid),
						page: (id, page, name = null, param = null) => name ? link(id).replace("{" + name + "}", param).replace("{page}", page) : link(id).replace("{page}", page),
					}}
					children={children}
				/>
			);
		case false:
			return <DiscoveryErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export default Discovery;
