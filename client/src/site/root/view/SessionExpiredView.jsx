import {SessionContext} from "component/session/Session";
import {useEffect} from "react";
import {useContext} from "react/cjs/react.production.min";

const SessionExpiredView = () => {
	const sessionContext = useContext(SessionContext);
	useEffect(() => {
		sessionContext.close();
		// eslint-disable-next-line
	}, []);
	return null;
};

export default SessionExpiredView;
