import SessionContext from "component/system/SessionContext";
import {useContext, useState} from "react";
import {useSessionCheck} from "site/public/redux/redux";
import LoaderView from "view/LoaderView";
import LockedUserView from "view/LockedUserView";

const DefaultState = {
	site: "public",
};

const ResolveSession = ({sites}) => {
	const [state, setState] = useState();
	const sessionContext = useContext(SessionContext);
	useSessionCheck(
		user => {
			sessionContext.open(user);
			/**
			 * we're done, everything looks good
			 */
			setState(true);
		},
		() => {
			/**
			 * there is some (unhandled) error
			 */
			setState(false);
		},
		{
			401: () => {
				/**
				 * 401 is OK here, because if we're on public, we'll get one when session is checked.
				 */
				setState(true);
			}
		}
	);
	switch (state) {
		case true: {
			return sites[sessionContext.session.site] || <LockedUserView/>;
		}
		default: {
			return <LoaderView/>;
		}
	}
};

const Session = ({sites}) => {
	const [session, setSession] = useState(DefaultState);
	return (
		<SessionContext.Provider
			value={{
				session,
				open: session => setSession(session),
				close: () => setSession(DefaultState),
			}}
			children={<ResolveSession sites={sites}/>}
		/>
	);
};

export default Session;
