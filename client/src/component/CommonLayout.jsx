import {Avatar, Card, Layout, PageHeader, Spin} from 'antd';
import RootPath from "../site/root/router/RootPath";
import React from 'react';
import {Helmet} from 'react-helmet';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {isLoading} from '../redux/loading/selector';
import {onMenuCollapse} from '../redux/menu/collapse/action';
import {isMenuCollapsed} from '../redux/menu/collapse/selector';
import icon from "../assets/icon.png";
import Menu from "antd/lib/menu";
import {Link} from "react-router-dom";

const CommonLayout = (
	{
		title,
		footer,
		menu,
		breadcrumbs,
		loading,
		isCollapsed,
		onCollapse,
		children,
		t,
	}) =>
	<Spin spinning={loading} tip={t('root.spinner')}>
		<Layout>
			<Helmet title={t(title)}/>
			<Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%', padding: '0'}}>
				<Menu theme="dark" mode="horizontal" selectable={false}>
					<Menu.Item key="derivean" icon={<Avatar style={{marginRight: '1em'}} size={"large"} src={icon}/>}><Link to={RootPath.root}>DeRivean</Link></Menu.Item>
				</Menu>
			</Layout.Header>
			<Layout style={{minHeight: '100vh', padding: '0 50px', marginTop: 64}}>
				<Layout.Sider
					collapsible
					collapsed={isCollapsed}
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
					children={menu}
				/>
				<Layout.Content style={{minHeight: '100vh', marginLeft: isCollapsed ? 80 : 220}}>
					<PageHeader title={t(title)} subTitle={'subtitle'}>
						{breadcrumbs}
					</PageHeader>
					<Card children={children}/>
				</Layout.Content>
			</Layout>
			<Layout.Footer style={{textAlign: 'center'}} children={footer}/>
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

