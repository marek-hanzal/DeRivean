import {Server, useAppContext} from "@leight-core/leight";
import {useEffect} from "react";

const useStatistics = (events) => {
	const appContext = useAppContext();
	useEffect(() => {
		const cancelToken = Server.httpGet(
			appContext.link("root.statistics"),
			events,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
};

const useServerSites = events => {
	const appContext = useAppContext();
	useEffect(() => {
		const cancelToken = Server.httpGet(
			appContext.link("root.server.sites"),
			events,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
};

const useServerValidate = events => {
	const appContext = useAppContext();
	useEffect(() => {
		const cancelToken = Server.httpGet(
			appContext.link("root.server.validate"),
			events,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
};

export {
	useStatistics,
	useServerSites,
	useServerValidate,
};
