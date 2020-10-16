import Table from 'antd/lib/table';
import Column from 'antd/lib/table/Column';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {onEntityPage} from '../../../../redux/entity/page/payload/action';
import {getEntityPage} from '../../../../redux/entity/page/payload/selector';
import {isLoading} from '../../../../redux/entity/page/status/selector';
import EntityPath from "../router/EntityPath";
import RootView from "../../component/RootView";

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
				title='root.entity.list.title'
				open={[EntityPath.root]}
				selected={[EntityPath.list]}
			>
				<Table
					dataSource={page.items}
					rowKey={record => record.id}
					loading={isLoading ? 100 : false}
					pagination={pagination}
				>
					<Column title={t('root.entity.list.table.id.title')} dataIndex='id'/>
					<Column title={t('root.entity.list.table.name.title')} dataIndex='name'/>
					<Column title={t('root.entity.list.table.ancestor.title')} dataIndex={['ancestor', 'name']}/>
				</Table>
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
