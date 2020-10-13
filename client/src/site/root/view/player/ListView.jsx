import {FundOutlined, HomeOutlined, UnorderedListOutlined} from '@ant-design/icons';
import Table from 'antd/lib/table';
import Column from 'antd/lib/table/Column';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import CommonLayout from '../../../../component/CommonLayout';
import {getPlayerPagesHref} from '../../../../redux/discovery/payload/selector';
import {onPlayerPages} from '../../../../redux/player/pages/payload/action';
import {getPlayerPages} from '../../../../redux/player/pages/payload/selector';
import {isLoading} from '../../../../redux/player/pages/status/selector';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import Path from '../../router/Path';

class ListView extends React.Component {
	componentDidMount() {
		this.props.onPlayerPages(this.props.playerPagesHref);
	}

	render() {
		const {
			t,
			pages,
			isLoading,
		} = this.props;

		let pagination = {};

		if (pages && !isLoading) {
			console.log(pages);
			pagination = {
				total: pages.total,
				pageSize: pages.limit,
				defaultPageSize: pages.limit,
				showQuickJumper: true,
				showSizeChanger: false,
				onChange: (page, pageSize) => {
					console.log(page, pageSize, pages.hrefs[page]);
				},
				onShowSizeChange: (current, size) => {
				}
			};
		}

		return (
			<CommonLayout
				title='root.player.list.title'
				menu={<MainMenu
					open={[Path.player.root]}
					selected={[Path.player.list]}
				/>}
				footer={<Footer/>}
				breadcrumbs={[
					{
						id: 'root.home',
						icon: <HomeOutlined/>,
						href: Path.root,
					},
					{
						id: Path.player.home,
						title: 'root.player.home.breadcrumb',
						href: Path.player.home,
						icon: <FundOutlined/>,
					},
					{
						id: Path.player.list,
						title: 'root.player.list.breadcrumb',
						icon: <UnorderedListOutlined/>,
					},
				]}
			>
				<Table
					dataSource={[
						{
							key: '1323-453-45',
							name: 'Hrac',
						},
						{
							key: '143534-5345-345345',
							name: 'Dalsi hrac',
						},
					]}
					size={'small'}
					loading={isLoading}
					pagination={pagination}
				>
					<Column title={t('root.player.list.table.id.title')} dataIndex='key'/>
					<Column title={t('root.player.list.table.name.title')} dataIndex='name'/>
				</Table>
			</CommonLayout>
		);
	}
}

export default connect(
	state => ({
		playerPagesHref: getPlayerPagesHref(state),
		isLoading: isLoading(state),
		pages: getPlayerPages(state),
	}),
	dispatch => ({
		onPlayerPages: href => dispatch(onPlayerPages(href)),
	})
)(withTranslation()(ListView));
