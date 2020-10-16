import {FundOutlined, HomeOutlined, UnorderedListOutlined} from '@ant-design/icons';
import Table from 'antd/lib/table';
import Column from 'antd/lib/table/Column';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import CommonLayout from '../../../../component/CommonLayout';
import {onPlayerPage} from '../../../../redux/player/page/payload/action';
import {getPlayerPage} from '../../../../redux/player/page/payload/selector';
import {isLoading} from '../../../../redux/player/page/status/selector';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import Path from '../../router/Path';

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
			<CommonLayout
				title='root.player.list.title'
				menu={<MainMenu
					open={[Path.root]}
					selected={[Path.list]}
				/>}
				footer={<Footer/>}
				breadcrumbs={[
					{
						id: 'root.home',
						icon: <HomeOutlined/>,
						href: Path.root,
					},
					{
						id: Path.home,
						title: 'root.player.home.breadcrumb',
						href: Path.home,
						icon: <FundOutlined/>,
					},
					{
						id: Path.list,
						title: 'root.player.list.breadcrumb',
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
					<Column title={t('root.player.list.table.id.title')} dataIndex='id'/>
					<Column title={t('root.player.list.table.name.title')} dataIndex='name'/>
				</Table>
			</CommonLayout>
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
