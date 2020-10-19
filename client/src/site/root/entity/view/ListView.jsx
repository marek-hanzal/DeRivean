import {Card, Table} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onEntityPage} from "redux/entity/page/payload/action";
import {getEntityPage} from "redux/entity/page/payload/selector";
import {isLoading} from "redux/entity/page/status/selector";
import RootView from "site/root/component/RootView";
import EntityPath from "site/root/entity/router/EntityPath";

class ListView extends React.Component {
	componentDidMount() {
		/**
		 * Fetch initial page and get overall paging data.
		 */
		this.props.onEntityPage(0, 10);
	}

	render() {
		const {
			t,
			page,
			isLoading,
		} = this.props;

		const pagination = {
			total: page.total,
			pageSize: page.size,
			defaultPageSize: page.size,
			showQuickJumper: true,
			hideOnSinglePage: true,
			onChange: (current, size) => this.props.onEntityPage(current - 1, size),
		};

		return (
			<RootView
				open={[EntityPath.root]}
				selected={[EntityPath.list]}
			>
				<Card title={"root.entity.list.title"}>
					<Table
						dataSource={page.items}
						rowKey={record => record.id}
						loading={{
							spinning: isLoading,
							delay: 100,
						}}
						pagination={pagination}
					>
						<Table.Column title={t("root.entity.list.table.id.title")} dataIndex='id'/>
						<Table.Column title={t("root.entity.list.table.name.title")} dataIndex='name'/>
						<Table.Column title={t("root.entity.list.table.ancestor.title")} dataIndex={["ancestor", "name"]}/>
					</Table>
				</Card>
			</RootView>
		);
	}
}

export default connect(
	state => ({
		page: getEntityPage(state),
		isLoading: isLoading(state),
	}),
	dispatch => ({
		onEntityPage: (page, size = 100) => dispatch(onEntityPage(page, size)),
	})
)(withTranslation()(ListView));
