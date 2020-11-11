import axios from "axios";
import {ClientContext} from "component/client/Client";
import React, {useContext, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import get from "utils/server/get";
import DiscoveryErrorView from "view/DiscoveryErrorView";
import LoaderView from "view/LoaderView";

const DiscoveryContext = React.createContext(null);

const useDiscovery = (
	client,
	events,
) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			client.discovery,
			events,
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch, client]);
};

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
						fetch: (id, uuid, replace) => link(id).replace(replace, uuid),
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

export {
	Discovery,
	DiscoveryContext,
	useDiscovery,
};
