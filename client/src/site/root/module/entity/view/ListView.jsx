import {Card} from "antd";
import Table from "component/Table";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onEntityPage} from "redux/entity/page/payload/action";
import {getEntityPage} from "redux/entity/page/payload/selector";
import {isLoading} from "redux/entity/page/status/selector";

const ListView = ({t, root, view, ...props}) => createElement(
	view,
	{
		open: [root],
		selected: [`${root}/list`],
	},
	<Card title={t("root.entity.list.title")}>
		<Table
			{...props}
			translation={"root.entity.list.table"}
			columns={[
				{name: "id"},
				{name: "name"},
				{name: ["ancestor", "name"], title: "ancestor"},
			]}
		/>
	</Card>
);

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
