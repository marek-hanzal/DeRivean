import BaseListView from "component/view/BaseListView";
import UserList from "site/root/module/user/component/UserList";
import UserView from "site/root/module/user/view/UserView";

const ListView = () => {
	return (
		<BaseListView
			base={UserView}
			id={"root.user"}
		>
			<UserList/>
		</BaseListView>
	);
};

export default ListView;
