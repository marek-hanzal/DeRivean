import BaseListView from "component/view/BaseListView";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import UserPageRedux from "redux/user/page/redux";
import UserView from "site/root/module/user/view/UserView";
import Routes from "site/Routes";
import column from "utils/table/column";
import columnRender from "utils/table/columnRender";

const ListView = ({...props}) => {
	const dispatch = useDispatch();
	const page = useSelector(UserPageRedux.selector.getPayload);
	const items = page.items;
	return (
		<BaseListView
			base={UserView}
			id={"root.user"}
			page={page}
			items={items}
			onPage={(page, size = 100) => dispatch(UserPageRedux.fetch(page, size))}
			isLoading={useSelector(UserPageRedux.selector.isLoading)}
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
