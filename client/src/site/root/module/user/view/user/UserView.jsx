import UserRedux from "redux/user/redux";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const UserView = () => {
	return (
		<EditViewWithAttributes
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
