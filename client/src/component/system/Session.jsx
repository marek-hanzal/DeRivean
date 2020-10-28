import {useSelector} from "react-redux";
import SessionRedux from "redux/session/redux";

const Session = ({sites}) => {
	const session = useSelector(SessionRedux.selector.getSession);
	return sites[session.user ? session.user.site : "public"];
};

export default Session;
