import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useDispatch, useSelector} from "react-redux";
import UserRedux from "redux/user/redux";
import Routes from "site/Routes";

const UserList = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(UserRedux.redux.page.selector.isLoading);
	return (
		<BaseTable
			page={useSelector(UserRedux.redux.page.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(UserRedux.redux.page.dispatch.page(page, size))}
			id={`root.user.list.table`}
			isLoading={isLoading}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.user.user.link(record.id)} text={text}/>},
				{title: "name", width: 220},
				{title: "login", width: 220},
				{title: "token", width: 380},
				{title: "site"},
			]}
		/>
	);
};

export default UserList;
