import {Table} from "antd";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

const BaseTable = (
	{
		id,
		redux,
		param = null,
		columns = [],
	}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	const page = useSelector(redux.redux.page.selector.getPayload);
	const items = page.items;

	const onPage = (current, size) => {
		dispatch(redux.redux.page.dispatch.page(current, size, param, param ? params[param] : null));
	};

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
				spinning: useSelector(redux.redux.page.selector.isLoading),
				delay: 100,
			}}
			pagination={{
				total: page.total,
				pageSize: page.size,
				defaultPageSize: page.size,
				showQuickJumper: true,
				onChange: (current, size) => onPage(current - 1, size),
			}}
			columns={columns.map(item => ({...item, dataIndex: item.title, key: item.title, title: t(`${id}.${item.title}.column`)}))}
		/>
	);
};

export default BaseTable;
