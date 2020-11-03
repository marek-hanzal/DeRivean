import {useEffect} from "react";
import {useDispatch} from "react-redux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const ServerRedux = CreateRedux({
	validate: CreateLinkRedux("server", "validate", "root.server.validate"),
	sites: CreateLinkRedux("server", "sites", "root.server.sites"),
});

const useServerSites = (
	onSuccess = sites => ({}),
	onError = error => ({}),
) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(ServerRedux.redux.sites.dispatch.sites()).then(onSuccess, onError);
	}, [dispatch]);
};

export {
	ServerRedux,
	useServerSites,
};
