import {Card} from "antd";
import Table from "component/Table";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";

const BaseListView = (
	{
		t,
		root,
		translation,
		view,
		columns,
		page,
		onPage,
		...props
	}) => createElement(
	view,
	{
		open: [root],
		selected: [`${root}/list`],
	},
	<Card title={t(`${translation}.list.title`)}>
		<Table
			page={page}
			onPage={onPage}
			{...props}
			translation={`${translation}.list.table`}
			columns={columns}
		/>
	</Card>
);

export default withTranslation()(BaseListView);
