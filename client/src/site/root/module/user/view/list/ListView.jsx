import BaseListView from "component/view/BaseListView";
import UserList from "site/root/module/user/component/UserList";
import {BaseUserView, UserContext} from "site/root/module/user/view/BaseUserView";

const ListView = () => {
	return (
		<BaseUserView>
			<BaseListView
				context={UserContext}
				open={["root.user", "root.blog"]}
			>
				<UserList context={UserContext}/>
			</BaseListView>
		</BaseUserView>
	);
};

export default ListView;
