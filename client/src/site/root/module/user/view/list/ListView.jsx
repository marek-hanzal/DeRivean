import BaseListView from "component/view/BaseListView";
import UserList from "site/root/module/user/component/UserList";
import RootView from "site/root/view/RootView";

const ListView = () => {
	return (
		<BaseListView
			base={RootView}
			id={"root.user"}
			open={["root.user", "root.blog"]}
		>
			<UserList/>
		</BaseListView>
	);
};

export default ListView;
