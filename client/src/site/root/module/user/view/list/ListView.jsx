import BaseListView from "component/view/BaseListView";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {onUserPage} from "redux/user/page/action";
import {getUserPage, isUserPageLoading} from "redux/user/page/selector";
import UserView from "site/root/module/user/view/UserView";
import Routes from "site/Routes";
import column from "utils/table/column";
import columnRender from "utils/table/columnRender";

const ListView = ({...props}) =>
	<BaseListView
		base={UserView}
		id={"root.user"}
		{...props}
		columns={[
			columnRender("id", (text, record) => <Link to={Routes.root.userContext.dashboard.link(record.id)}>{text}</Link>),
			column("name"),
			column("token"),
			column("site"),
		]}
	/>
;

export default connect(
	state => ({
		page: getUserPage(state),
		items: getUserPage(state).items,
		isLoading: isUserPageLoading(state),
	}),
	dispatch => ({
		onPage: (page, size = 100) => dispatch(onUserPage(page, size)),
	})
)(withTranslation()(ListView));
