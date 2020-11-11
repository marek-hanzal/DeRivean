import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import Events from "utils/Events";
import doDelete from "utils/server/doDelete";
import get from "utils/server/get";
import LoaderView from "view/LoaderView";
import LockedUserView from "view/LockedUserView";

const SessionContext = React.createContext(null);

const DefaultState = {
	site: "public",
};

const useSessionCheck = events => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			discoveryContext.link("public.user.login"),
			events,
			navigate,
			cancelToken,
		);
		// eslint-disable-next-line
	}, []);
};

const doSessionDelete = (
	discovery,
	events,
	navigate,
) => doDelete(
	discovery.link("public.user.login"),
	events,
	navigate,
);

const ResolveSession = ({sites}) => {
	const [state, setState] = useState();
	const sessionContext = useContext(SessionContext);
	useSessionCheck(
		Events()
			.on("success", user => {
				sessionContext.open(user);
				/**
				 * we're done, everything looks good
				 */
				setState(true);
			})
			.on("error", () => {
				/**
				 * there is some (unhandled) error
				 */
				setState(false);
			})
			.on("http-401", () => {
				/**
				 * 401 is OK here, because if we're on public, we'll get one when session is checked.
				 */
				setState(true);
			})
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
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	return (
		<SessionContext.Provider
			value={{
				session,
				open: session => setSession(session),
				close: () => {
					setSession(DefaultState);
					doSessionDelete(
						discoveryContext,
						// if we're already logged out, do nothing (as internal stuff could handle 401 errors)
						Events()
							.on("http-401", () => false),
						navigate
					);
				},
			}}
			children={<ResolveSession sites={sites}/>}
		/>
	);
};

export {
	Session,
	SessionContext,
	useSessionCheck,
	doSessionDelete,
};
