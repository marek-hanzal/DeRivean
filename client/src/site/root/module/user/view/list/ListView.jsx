import BaseListView from "component/view/BaseListView";
import UserList from "site/root/module/user/component/UserList";
import UserView from "site/root/module/user/view/UserView";

const ListView = () => {
	return (
		<UserView>
			<BaseListView>
				<UserList/>
			</BaseListView>
		</UserView>
	);
};

export default ListView;
