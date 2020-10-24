import {Table} from "antd";
import {Component} from "react";
import {withTranslation} from "react-i18next";

class BaseTable extends Component {
	componentDidMount() {
		/**
		 * Fetch initial page and get overall paging data.
		 */
		this.props.onPage(0, 10);
	}

	render() {
		const {
			t,
			id,
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
					onChange: (current, size) => onPage(current - 1, size),
				}}
				children={columns.map(item => <Table.Column key={item.title || item.name} render={item.render} title={t(`${id}.${item.title || item.name}.column`)} dataIndex={item.name}/>)}
			/>
		);
	}
}

export default withTranslation()(BaseTable);
