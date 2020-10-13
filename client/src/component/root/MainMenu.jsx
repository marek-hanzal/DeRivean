import {HomeOutlined, PoweroffOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BaseMenu from '../../component/common/BaseMenu';
import Path from '../../router/root/Path';

const MainMenu = (
	{
		open = [],
		selected = [],
		onLogout,
		t,
	}) =>
	<BaseMenu
		open={open}
		selected={selected}
		style={{
			height: '100vh',
		}}
	>
		<Menu.Item key={Path.ROOT}>
			<HomeOutlined/>
			<Link to={Path.ROOT}>{t('root.home.menu')}</Link>
		</Menu.Item>
		<Menu.Divider/>
		{/*<Menu.SubMenu key={InvoicePath.ROOT} title={<><BookOutlined/>{t('root.invoice.menu')}</>}>*/}
		{/*	<Menu.Item key={InvoicePath.DASHBOARD}>*/}
		{/*		<FundOutlined/>*/}
		{/*		<Link to={InvoicePath.DASHBOARD}>{t('root.invoice.home.menu')}</Link>*/}
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
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({})
)(withTranslation()(MainMenu));
