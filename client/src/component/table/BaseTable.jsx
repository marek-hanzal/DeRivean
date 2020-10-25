import {Table} from "antd";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

const BaseTable = (
	{
		id,
		page,
		onPage,
		items,
		isLoading,
		columns = [],
	}) => {
	const {t} = useTranslation();
	/**
	 * Without dependency, because onPage is callback which changes overtime (thus forcing re-rendering).
	 */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => onPage(0, 10), []);

	return (
		<Table
			dataSource={items}
			rowKey={record => record.id}
			loading={{
				spinning: isLoading,
				delay: 100,
			}}
			pagination={{
				total: page.total,
				pageSize: page.size,
				defaultPageSize: page.size,
				showQuickJumper: true,
				onChange: (current, size) => onPage(current - 1, size),
			}}
			children={columns.map(item => <Table.Column key={item.title || item.name} render={item.render} title={t(`${id}.${item.title || item.name}.column`)} dataIndex={item.name}/>)}
		/>
	);
};

export default BaseTable;
