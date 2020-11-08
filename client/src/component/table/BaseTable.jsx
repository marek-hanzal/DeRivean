import {List} from "antd";
import axios from "axios";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import defaultPage from "utils/page";

const BaseTable = (
	{
		redux,
		param = null,
		children,
	}) => {
	const dispatch = useDispatch();
	const params = useParams();
	const [page, setPage] = useState(defaultPage);
	const [loading, setLoading] = useState(true);
	const items = page.items;

	const onPage = (current, size, cancelToken = null) => {
		dispatch(redux.redux.page.dispatch.page(current, size, param, param ? params[param] : null, cancelToken)).then(data => {
			setPage(data);
			setLoading(false);
		}, () => {
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
		<List
			style={{minHeight: "50vh"}}
			dataSource={items}
			rowKey={record => record.id}
			loading={{
				spinning: loading,
				delay: 100,
			}}
			itemLayout={"horizontal"}
			size={"large"}
			pagination={{
				total: page.total,
				pageSize: page.size,
				defaultPageSize: page.size,
				showQuickJumper: true,
				onChange: (current, size) => onPage(current - 1, size),
			}}
			renderItem={children}
		/>
	);
};

BaseTable.propTypes = {
	children: PropTypes.func.isRequired,
	redux: PropTypes.object.isRequired,
};

export default BaseTable;
