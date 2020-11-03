import {useState} from "react";
import {useClient} from "redux/client/redux";
import ClientErrorView from "view/ClientErrorView";
import LoaderView from "view/LoaderView";

const Client = ({children}) => {
	const [status, setStatus] = useState();
	useClient(() => {
		setStatus(true);
	}, () => {
		setStatus(false);
	});
	switch (status) {
		case true:
			return children;
		case false:
			return <ClientErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export default Client;
