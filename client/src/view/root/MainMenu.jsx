import {HomeOutlined, PoweroffOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {onOpenMenu} from '../../redux/menu/open/action';
import {getOpenMenu} from '../../redux/menu/open/selector';
import Path from './Path';

const MainMenu = (
	{
		openState,
		open = [],
		selected = [],
		onOpenChange,
		onLogout,
		t
	}) =>
	<Menu
		mode='inline'
		selectable={true}
		defaultOpenKeys={openState || open}
		selectedKeys={selected}
		onOpenChange={onOpenChange}
		style={{
			height: '100vh',
		}}
	>
		<Menu.Item key={Path.ROOT}>
			<HomeOutlined/>
			<Link to={Path.ROOT}>{t('root.dashboard.menu')}</Link>
		</Menu.Item>
		<Menu.Divider/>
		{/*<Menu.SubMenu key={InvoicePath.ROOT} title={<><BookOutlined/>{t('root.invoice.menu')}</>}>*/}
		{/*	<Menu.Item key={InvoicePath.DASHBOARD}>*/}
		{/*		<FundOutlined/>*/}
		{/*		<Link to={InvoicePath.DASHBOARD}>{t('root.invoice.dashboard.menu')}</Link>*/}
		{/*	</Menu.Item>*/}
		{/*	<Menu.Item key={InvoicePath.CREATE}>*/}
		{/*		<CodeOutlined/>*/}
		{/*		<Link to={InvoicePath.CREATE}>{t('root.invoice.create.menu')}</Link>*/}
		{/*	</Menu.Item>*/}
		{/*	<Menu.Item key={InvoicePath.LIST}>*/}
		{/*		<DatabaseOutlined/>*/}
		{/*		<Link to={InvoicePath.LIST}>{t('root.invoice.list.menu')}</Link>*/}
		{/*	</Menu.Item>*/}
		{/*</Menu.SubMenu>*/}
		<Menu.Divider/>
		<Menu.Item key='root.logout' onClick={() => onLogout()}>
			<PoweroffOutlined/>
			{t('root.logout.menu')}
		</Menu.Item>
	</Menu>
;

export default connect(
	state => ({
		openState: getOpenMenu(state),
	}),
	dispatch => ({
		onOpenChange: open => dispatch(onOpenMenu(open)),
	})
)(withTranslation()(MainMenu));
