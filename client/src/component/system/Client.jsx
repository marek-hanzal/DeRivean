import ClientContext from "component/system/ClientContext";
import Discovery from "component/system/Discovery";
import {useState} from "react";
import {useClient} from "redux/client/redux";
import ClientErrorView from "view/ClientErrorView";
import LoaderView from "view/LoaderView";

const Client = ({children}) => {
	const [status, setStatus] = useState();
	const [client, setClient] = useState();
	useClient(client => {
		setClient(client);
		setStatus(true);
	}, () => {
		setStatus(false);
	});
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

export default Client;
