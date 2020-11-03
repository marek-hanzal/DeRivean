import BaseListView from "component/view/BaseListView";
import UserList from "site/root/module/user/component/UserList";
import {UserContext, UserView} from "site/root/module/user/view/UserView";

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
