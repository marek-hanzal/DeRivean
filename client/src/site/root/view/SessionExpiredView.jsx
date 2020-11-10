import SessionContext from "component/system/SessionContext";
import {useEffect} from "react";
import {useContext} from "react/cjs/react.production.min";

const SessionExpiredView = () => {
	const sessionContext = useContext(SessionContext);
	useEffect(() => {
		sessionContext.close();
	}, [sessionContext]);
	return null;
};

export default SessionExpiredView;
