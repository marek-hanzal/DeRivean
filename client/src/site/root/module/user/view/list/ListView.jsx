import BaseListView from "component/view/BaseListView";
import UserContext from "site/root/module/user/component/UserContext";
import UserList from "site/root/module/user/component/UserList";
import UserView from "site/root/module/user/view/UserView";

const ListView = () => {
	return (
		<UserView>
			<BaseListView context={UserContext}>
				<UserList context={UserContext}/>
			</BaseListView>
		</UserView>
	);
};

export default ListView;
