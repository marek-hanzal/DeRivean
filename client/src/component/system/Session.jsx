import {useState} from "react";
import {useDispatch} from "react-redux";
import {SessionRedux} from "redux/session/redux";
import {useSessionCheck} from "site/public/redux/redux";
import LoaderView from "view/LoaderView";
import LockedUserView from "view/LockedUserView";

const Session = ({sites}) => {
	const dispatch = useDispatch();
	const [state, setState] = useState();
	const [user, setUser] = useState({site: "public"});
	useSessionCheck(
		session => {
			setUser(session);
			dispatch(SessionRedux.open(session));
			/**
			 * we're done, everything looks good
			 */
			setState(true);
		},
		error => {
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
			return sites[user.site] || <LockedUserView/>;
		}
		default: {
			return <LoaderView/>;
		}
	}

};

export default Session;
