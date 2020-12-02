import {Server, useAppContext} from "@leight-core/leight";
import {useEffect} from "react";

const useAttributeTypeByGroups = (groups, events) => {
	const appContext = useAppContext();
	useEffect(() => {
		events.call("request", groups);
		const cancelToken = Server.httpPost(
			appContext.link("root.attribute-group.attribute-type.list"),
			{groups},
			events,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [groups]);
};

export {
	useAttributeTypeByGroups,
};
