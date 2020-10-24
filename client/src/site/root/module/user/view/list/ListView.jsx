import BaseListView from "component/view/BaseListView";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserPage} from "redux/user/page/action";
import {getUserPage, isUserPageLoading} from "redux/user/page/selector";
import UserContextLink from "site/root/module/user-context/component/UserContextLink";
import UserView from "site/root/module/user/view/UserView";
import column from "utils/table/column";
import columnRender from "utils/table/columnRender";

const ListView = ({...props}) =>
	<BaseListView
		base={UserView}
		id={"root.user"}
		{...props}
		columns={[
			columnRender("id", (text, record) => <UserContextLink uuid={record.id}>{text}</UserContextLink>),
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
