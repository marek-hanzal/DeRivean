import BaseListView from "component/view/BaseListView";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router";
import {Link} from "react-router-dom";
import KingdomPageRedux from "redux/kingdom/page/redux";
import MenuRedux from "redux/menu/redux";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import Routes from "site/Routes";

const ListView = (props) => {
	const dispatch = useDispatch();
	const params = useParams();
	const location = useLocation();
	const history = useSelector(MenuRedux.selector.getHistory);
	return (
		<BaseListView
			base={KingdomView}
			id={"root.userContext.kingdom"}
			page={useSelector(KingdomPageRedux.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(KingdomPageRedux.fetch(params.user, page, size))}
			isLoading={useSelector(KingdomPageRedux.selector.isLoading)}
			{...props}
			columns={[
				{
					title: "id", width: 380, render: (text, record) => <Link to={Routes.root.kingdomContext.dashboard.link(record.id)} onClick={() => {
						history.push(location.pathname);
						dispatch(MenuRedux.history(history));
					}}>{text}</Link>
				},
				{title: "name"},
			]}
		/>
	);
};

export default ListView;
