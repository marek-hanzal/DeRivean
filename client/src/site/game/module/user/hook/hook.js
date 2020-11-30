import {Server, useAppContext} from "@leight-core/leight";
import {useEffect} from "react";

const useUserResource = (events) => {
	const discoveryContext = useAppContext();
	useEffect(() => {
		events.call("request");
		const cancelToken = Server.httpGet(
			discoveryContext.link("game.user.resource"),
			events,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
};

export {
	useUserResource,
};
