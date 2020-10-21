import BaseListView from "component/BaseListView";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {onUserPage} from "redux/user/page/action";
import {getUserPage, isUserPageLoading} from "redux/user/page/selector";
import column from "utils/table/column";
import columnRender from "utils/table/columnRender";

const ListView = ({...props}) =>
	<BaseListView
		{...props}
		columns={[
			columnRender("id", (text, record) => <Link to={`/root/user/${record.id}/home`}>{text}</Link>),
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
