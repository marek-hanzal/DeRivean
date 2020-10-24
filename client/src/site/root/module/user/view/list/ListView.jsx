import BaseListView from "component/view/BaseListView";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {onUserPage} from "redux/user/page/action";
import {getUserPage, isUserPageLoading} from "redux/user/page/selector";
import UserView from "site/root/module/user/view/UserView";
import Routes from "site/Routes";
import column from "utils/table/column";
import columnRender from "utils/table/columnRender";

const ListView = ({...props}) => {
	const dispatch = useDispatch();
	const page = useSelector(getUserPage);
	const items = page.items;
	return (
		<BaseListView
			base={UserView}
			id={"root.user"}
			page={page}
			items={items}
			onPage={(page, size = 100) => dispatch(onUserPage(page, size))}
			isLoading={useSelector(isUserPageLoading)}
			{...props}
			columns={[
				columnRender("id", (text, record) => <Link to={Routes.root.userContext.dashboard.link(record.id)}>{text}</Link>),
				column("name"),
				column("token"),
				column("site"),
			]}
		/>
	);
};

export default ListView;
