import BaseListView from "component/view/BaseListView";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onEntityPage} from "redux/entity/page/action";
import {getEntityPage, isEntityPageLoading} from "redux/entity/page/selector";
import column from "utils/table/column";

const ListView = ({...props}) =>
	<BaseListView
		{...props}
		columns={[
			column("id"),
			column("name"),
			column(["ancestor", "name"], "ancestor"),
		]}
	/>
;

export default connect(
	state => ({
		page: getEntityPage(state),
		items: getEntityPage(state).items,
		isLoading: isEntityPageLoading(state),
	}),
	dispatch => ({
		onPage: (page, size = 100) => dispatch(onEntityPage(page, size)),
	})
)(withTranslation()(ListView));
