import axios from "axios";
import {Discovery} from "component/discovery/Discovery";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import Events from "utils/Events";
import get from "utils/server/get";
import ClientErrorView from "view/ClientErrorView";
import LoaderView from "view/LoaderView";

const ClientContext = React.createContext(null);

const useClient = (
	events,
	href = "/client.json"
) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			href,
			events,
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch, href]);
};

const Client = ({children}) => {
	const [status, setStatus] = useState();
	const [client, setClient] = useState();
	useClient(
		Events()
			.on("success", client => {
				setClient(client);
				setStatus(true);
			})
			.on("error", () => {
				setStatus(false);
			})
	);
	switch (status) {
		case true:
			return (
				<ClientContext.Provider value={client}>
					<Discovery>
						{children}
					</Discovery>
				</ClientContext.Provider>
			);
		case false:
			return <ClientErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export {
	Client,
	ClientContext,
	useClient,
};
