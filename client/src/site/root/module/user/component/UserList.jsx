import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {UserRedux} from "redux/user/redux";
import Routes from "site/Routes";

const UserList = () => {
	return (
		<BaseTable
			id={`root.user.list.table`}
			redux={UserRedux}
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
