import {Table} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import defaultPage from "utils/page";

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
	const [page, setPage] = useState(defaultPage);
	const [loading, setLoading] = useState(true);
	const items = page.items;

	const onPage = (current, size, cancelToken = null) => {
		dispatch(redux.redux.page.dispatch.page(current, size, param, param ? params[param] : null, cancelToken)).then(data => {
			setPage(data);
			setLoading(false);
		}, error => {
			if (error.cancel) {
				return;
			}
			setLoading(false);
		});
	};

	/**
	 * Without dependency, because onPage is callback which changes overtime (thus forcing re-rendering).
	 */
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		onPage(0, 10, cancelToken);
		return () => cancelToken.cancel();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Table
			dataSource={items}
			rowKey={record => record.id}
			loading={{
				spinning: loading,
				delay: 100,
			}}
			size={"small"}
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
