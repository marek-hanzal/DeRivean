import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "site/root/module/user/component/UserContext";

const UserList = () => {
	const context = useContext(UserContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			columns={[
				{title: "id", width: 380, render: (text, record) => <Link to={context.link.home(record.id)} children={text}/>},
				{title: "name", width: 220},
				{title: "login", width: 220},
				{title: "token", width: 380},
				{title: "site"},
			]}
		/>
	);
};

export default UserList;
