import {Card, Table} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onPlayerPage} from "redux/player/page/payload/action";
import {getPlayerPage} from "redux/player/page/payload/selector";
import {isLoading} from "redux/player/page/status/selector";
import RootView from "site/root/component/RootView";
import PlayerPath from "site/root/player/router/PlayerPath";

class ListView extends React.Component {
	componentDidMount() {
		/**
		 * Fetch initial page and get overall paging data.
		 */
		this.props.onPlayerPage(0, 10);
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
			onChange: (current, size) => this.props.onPlayerPage(current - 1, size),
		};

		return (
			<RootView
				open={[PlayerPath.root]}
				selected={[PlayerPath.list]}
			>
				<Card title={t("root.player.list.title")}>
					<Table
						dataSource={page.items}
						rowKey={record => record.id}
						loading={{
							spinning: isLoading,
							delay: 100,
						}}
						pagination={pagination}
					>
						<Table.Column title={t("root.player.list.table.id.title")} dataIndex='id'/>
						<Table.Column title={t("root.player.list.table.name.title")} dataIndex='name'/>
					</Table>
				</Card>
			</RootView>
		);
	}
}

export default connect(
	state => ({
		page: getPlayerPage(state),
		isLoading: isLoading(state),
	}),
	dispatch => ({
		onPlayerPage: (page, size = 100) => dispatch(onPlayerPage(page, size)),
	})
)(withTranslation()(ListView));
