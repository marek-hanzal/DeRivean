import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useContext} from "react";
import UserContext from "site/root/module/user/component/UserContext";

const UserList = () => {
	const context = useContext(UserContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={context.link.home(record.id)} text={text}/>},
				{title: "name", width: 220},
				{title: "login", width: 220},
				{title: "token", width: 380},
				{title: "site"},
			]}
		/>
	);
};

export default UserList;
