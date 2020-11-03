import {useSelector} from "react-redux";
import {SessionRedux} from "redux/session/redux";

const Session = ({sites}) => {
	const user = useSelector(SessionRedux.selector.getUser);
	return sites[user ? user.site : "public"];
};

export default Session;
