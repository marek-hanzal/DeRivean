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

	function selectLink(id) {
		if (!discovery[id]) {
			throw new Error(`Cannot resolve link from Discovery for linkId [${id}]`);
		}
		return discovery[id].link;
	}

	function selectFetch(id, uuid, replace = "{id}") {
		return selectLink(id).replace(replace, uuid);
	}

	function selectPage(id, page, name = null, param = null) {
		return name ? selectLink(id).replace("{" + name + "}", param).replace("{page}", page) : selectLink(id).replace("{page}", page);
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
						selectLink,
						selectFetch,
						selectPage,
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
