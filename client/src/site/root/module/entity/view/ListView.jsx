import {Card} from "antd";
import CommonTable from "component/CommonTable";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onEntityPage} from "redux/entity/page/payload/action";
import {getEntityPage} from "redux/entity/page/payload/selector";
import {isLoading} from "redux/entity/page/status/selector";
import RootView from "site/root/component/RootView";
import EntityPath from "site/root/module/entity/router/EntityPath";

const ListView = ({t, ...props}) =>
	<RootView
		open={[EntityPath.root]}
		selected={[EntityPath.list]}
	>
		<Card title={t("root.entity.list.title")}>
			<CommonTable
				{...props}
				translation={"root.entity.list.table"}
				columns={[
					{name: "id"},
					{name: "name"},
					{name: ["ancestor", "name"], title: "ancestor"},
				]}
			/>
		</Card>
	</RootView>;

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
