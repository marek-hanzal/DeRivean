import UserRedux from "redux/user/redux";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";

const UserView = () => {
	return (
		<DashboardViewWithAttributes
			id={"root.user"}
			formName={"user"}
			redux={UserRedux}
			param={"user"}
			open={["root.kingdom"]}
			icon={<UserIcon/>}
		/>
	);
};

export default UserView;
