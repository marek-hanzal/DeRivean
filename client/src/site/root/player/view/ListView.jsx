import Table from "antd/lib/table";
import Column from "antd/lib/table/Column";
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
				title='root.player.list.title'
				subtitle='root.player.list.subtitle'
				open={[PlayerPath.root]}
				selected={[PlayerPath.list]}
			>
				<Table
					dataSource={page.items}
					rowKey={record => record.id}
					loading={{
						spinning: isLoading,
						delay: 100,
					}}
					pagination={pagination}
				>
					<Column title={t("root.player.list.table.id.title")} dataIndex='id'/>
					<Column title={t("root.player.list.table.name.title")} dataIndex='name'/>
				</Table>
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
