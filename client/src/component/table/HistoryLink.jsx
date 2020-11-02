import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import SessionRedux from "redux/session/redux";

const HistoryLink = ({text, ...props}) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useSelector(SessionRedux.selector.getHistory);
	return (
		<Link {...props} onClick={() => {
			history.push(location.pathname);
			dispatch(SessionRedux.history(history));
		}}>{text}</Link>
	);
};

export default HistoryLink;
