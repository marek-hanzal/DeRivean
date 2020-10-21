import BaseListView from "component/BaseListView";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onEntityPage} from "redux/entity/page/payload/action";
import {getEntityPage} from "redux/entity/page/payload/selector";
import {isLoading} from "redux/entity/page/status/selector";
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
		isLoading: isLoading(state),
	}),
	dispatch => ({
		onPage: (page, size = 100) => dispatch(onEntityPage(page, size)),
	})
)(withTranslation()(ListView));
