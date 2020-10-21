import {Table} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";

class CommonTable extends React.Component {
	componentDidMount() {
		/**
		 * Fetch initial page and get overall paging data.
		 */
		this.props.onPage(0, 10);
	}

	render() {
		const {
			t,
			translation,
			page,
			onPage,
			items,
			isLoading,
			columns = [],
		} = this.props;

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
					hideOnSinglePage: true,
					onChange: (current, size) => onPage(current - 1, size),
				}}
				children={columns.map(item => <Table.Column title={t(`${translation}.${item.title || item.name}.column`)} dataIndex={item.name}/>)}
			/>
		);
	}
}

export default withTranslation()(CommonTable);
