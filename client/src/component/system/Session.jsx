import {useSelector} from "react-redux";
import {getSession} from "redux/session/selector";

const Session = ({sites}) => {
	const session = useSelector(getSession);
	return sites[session.user ? session.user.site : "public"];
};

export default Session;
