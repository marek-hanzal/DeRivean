import BaseListView from "component/view/BaseListView";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import MenuRedux from "redux/menu/redux";
import UserPageRedux from "redux/user/page/redux";
import UserView from "site/root/module/user/view/UserView";
import Routes from "site/Routes";

const ListView = ({...props}) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useSelector(MenuRedux.selector.getHistory);
	return (
		<BaseListView
			base={UserView}
			id={"root.user"}
			page={useSelector(UserPageRedux.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(UserPageRedux.fetch(page, size))}
			isLoading={useSelector(UserPageRedux.selector.isLoading)}
			{...props}
			columns={[
				{
					title: "id", width: 380, render: (text, record) => <Link to={Routes.root.userContext.dashboard.link(record.id)} onClick={() => {
						history.push(location.pathname);
						dispatch(MenuRedux.history(history));
					}}>{text}</Link>
				},
				{title: "name", width: 220},
				{title: "token", width: 380},
				{title: "site"},
			]}
		/>
	);
};

export default ListView;
