import {List} from "antd";
import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import PropTypes from "prop-types";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import Events from "utils/Events";
import defaultPage from "utils/page";

const BaseTable = (
	{
		onFetchPage,
		children,
		footer = null,
		pageSize = 10,
	}) => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	const params = useParams();
	const [page, setPage] = useState(defaultPage);
	const [loading, setLoading] = useState(true);
	const items = page.items;

	const onPage = (page, size, cancelToken = null) => {
		setLoading(true);
		onFetchPage(
			discoveryContext,
			page,
			size,
			params,
			Events()
				.on("success", data => {
					setPage(data);
					setLoading(false);
				})
				.on("error", () => {
					setLoading(false);
				}),
			navigate,
			cancelToken,
		);
	};

	/**
	 * Without dependency, because onPage is callback which changes overtime (thus forcing re-rendering).
	 */
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		onPage(0, pageSize, cancelToken);
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
				delay: 50,
			}}
			itemLayout={"horizontal"}
			footer={footer}
			pagination={{
				total: page.total,
				pageSize: page.size,
				defaultPageSize: page.size,
				showQuickJumper: true,
				hideOnSinglePage: true,
				onChange: (current, size) => onPage(current - 1, size),
			}}
			renderItem={children}
		/>
	);
};

BaseTable.propTypes = {
	children: PropTypes.func.isRequired,
	onFetchPage: PropTypes.func.isRequired,
};

export default BaseTable;
