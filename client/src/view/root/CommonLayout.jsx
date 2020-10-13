import {Card, Col, Layout, PageHeader, Row, Spin} from 'antd';
import React from 'react';
import {Helmet} from 'react-helmet';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import Breadcrumbs from '../../component/common/Breadcrumbs';
import {isLoading} from '../../redux/loading/selector';
import {onMenuCollapse} from '../../redux/menu/collapse/action';
import {isMenuCollapsed} from '../../redux/menu/collapse/selector';
import Footer from './Footer';
import Menu from './MainMenu';

const CommonLayout = (
	{
		title,
		spans = {
			xs: {span: 24},
			sm: {span: 24},
			md: {span: 24},
			lg: {span: 24},
			xl: {span: 24},
		},
		open = [],
		selected = [],
		breadcrumbs = [],
		loading,
		isCollapsed,
		onCollapse,
		children,
		t,
	}) =>
	<Spin spinning={loading} tip={t('root.spinner')}>
		<Helmet title={t(title)}/>
		<Layout style={{minHeight: '100vh'}}>
			<Layout.Sider
				collapsible
				defaultCollapsed={isCollapsed}
				onCollapse={onCollapse}
				width={220}
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					backgroundColor: 'rgb(240, 242, 245)',
					left: 0,
				}}
			>
				<Menu open={isCollapsed ? [] : open} selected={selected}/>
			</Layout.Sider>
			<Layout style={isCollapsed ? {
				marginLeft: 80,
				transition: 'all 0.2s'
			} : {
				marginLeft: 220,
				transition: 'all 0.2s'
			}}>
				<Row type='flex' justify='center'>
					<Col span={23}>
						<Breadcrumbs breadcrumbs={breadcrumbs}/>
						<Layout.Content style={{minHeight: '100vh'}}>
							<Row type='flex' justify='center'>
								<Col {...spans}>
									<PageHeader title={t(title)} subTitle={'subtitle'}/>
									<Card>
										{children}
									</Card>
								</Col>
							</Row>
						</Layout.Content>
						<Layout.Footer style={{textAlign: 'center'}}><Footer/></Layout.Footer>
					</Col>
				</Row>
			</Layout>
		</Layout>
	</Spin>
;

export default connect(
	state => ({
		loading: isLoading(state),
		isCollapsed: isMenuCollapsed(state),
	}),
	dispatch => ({
		onCollapse: isCollapsed => dispatch(onMenuCollapse(isCollapsed)),
	})
)(withTranslation()(CommonLayout));

