import {Card} from "antd";
import BaseTable from "component/table/BaseTable";
import {createElement} from "react";
import {useTranslation} from "react-i18next";

const BaseListView = (
	{
		base,
		id,
		page,
		onPage,
		columns,
		...props
	}) => {
	const {t} = useTranslation();
	return (
		createElement(
			base,
			{
				id: `${id}.list`,
				...props
			},
			<Card title={t(`${id}.list.title`)}>
				<BaseTable
					page={page}
					onPage={onPage}
					{...props}
					id={`${id}.list.table`}
					columns={columns}
				/>
			</Card>
		)
	);
};

export default BaseListView;
