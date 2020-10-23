import BaseListView from "component/view/BaseListView";

import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {onUserPage} from "redux/user/page/action";
import {getUserPage, isUserPageLoading} from "redux/user/page/selector";
import UserPath from "site/root/module/user/router/UserPath";
import column from "utils/table/column";
import columnRender from "utils/table/columnRender";

const ListView = ({...props}) =>
	<BaseListView
		{...props}
		columns={[
			columnRender("id", (text, record) => <Link to={UserPath.home(record.id)}>{text}</Link>),
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