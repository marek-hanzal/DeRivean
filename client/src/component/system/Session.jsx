import {useSelector} from "react-redux";
import {SessionRedux} from "redux/session/redux";
import LockedUserView from "view/LockedUserView";

const Session = ({sites}) => {
	const user = useSelector(SessionRedux.selector.getUser);
	return sites[user ? user.site : "public"] || <LockedUserView/>;
};

export default Session;
