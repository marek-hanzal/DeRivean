import {SessionContext} from "component/session/Session";
import {useContext, useEffect} from "react";

const SessionExpiredView = () => {
	const sessionContext = useContext(SessionContext);
	useEffect(() => {
		sessionContext.close();
		// eslint-disable-next-line
	}, []);
	return null;
};

export default SessionExpiredView;
