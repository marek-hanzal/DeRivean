import HistoryLink from "component/table/HistoryLink";
import BaseListView from "component/view/BaseListView";
import {useDispatch, useSelector} from "react-redux";
import UserRedux from "redux/user/redux";
import UserView from "site/root/module/user/view/UserView";
import Routes from "site/Routes";

const ListView = ({...props}) => {
	const dispatch = useDispatch();
	return (
		<BaseListView
			base={UserView}
			id={"root.user"}
			page={useSelector(UserRedux.redux.page.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(UserRedux.redux.page.dispatch.page(page, size))}
			isLoading={useSelector(UserRedux.redux.page.selector.isLoading)}
			{...props}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.userContext.dashboard.link(record.id)} text={text}/>},
				{title: "name", width: 220},
				{title: "token", width: 380},
				{title: "site"},
			]}
		/>
	);
};

export default ListView;
