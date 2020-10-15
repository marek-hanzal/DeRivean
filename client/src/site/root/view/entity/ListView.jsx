import {FundOutlined, HomeOutlined, UnorderedListOutlined} from '@ant-design/icons';
import Table from 'antd/lib/table';
import Column from 'antd/lib/table/Column';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import CommonLayout from '../../../../component/CommonLayout';
import {onEntityPage} from '../../../../redux/entity/page/payload/action';
import {getEntityPage} from '../../../../redux/entity/page/payload/selector';
import {isLoading} from '../../../../redux/entity/page/status/selector';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import Path from '../../router/Path';

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
			<CommonLayout
				title='root.entity.list.title'
				menu={<MainMenu
					open={[Path.entity.root]}
					selected={[Path.entity.list]}
				/>}
				footer={<Footer/>}
				breadcrumbs={[
					{
						id: 'root.home',
						icon: <HomeOutlined/>,
						href: Path.root,
					},
					{
						id: Path.entity.home,
						title: 'root.entity.home.breadcrumb',
						href: Path.entity.home,
						icon: <FundOutlined/>,
					},
					{
						id: Path.entity.list,
						title: 'root.entity.list.breadcrumb',
						icon: <UnorderedListOutlined/>,
					},
				]}
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
			</CommonLayout>
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
