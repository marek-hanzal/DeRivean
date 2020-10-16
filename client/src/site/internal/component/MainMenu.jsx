import {HomeOutlined, PoweroffOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BaseMenu from '../../../component/BaseMenu';
import InternalPath from "../router/InternalPath";

const MainMenu = (
	{
		onLogout,
		t
	}) =>
	<BaseMenu>
		<Menu.Item key={InternalPath.root} icon={<HomeOutlined/>}>
			<Link to={InternalPath.root}>{t('internal.home.menu')}</Link>
		</Menu.Item>
		<Menu.Divider/>
		{/*<Menu.SubMenu key={InvoicePath.ROOT} title={<><BookOutlined/>{t('internal.invoice.menu')}</>}>*/}
		{/*	<Menu.Item key={InvoicePath.DASHBOARD}>*/}
		{/*		<FundOutlined/>*/}
		{/*		<Link to={InvoicePath.DASHBOARD}>{t('internal.invoice.home.menu')}</Link>*/}
		{/*	</Menu.Item>*/}
		{/*	<Menu.Item key={InvoicePath.CREATE}>*/}
		{/*		<CodeOutlined/>*/}
		{/*		<Link to={InvoicePath.CREATE}>{t('internal.invoice.create.menu')}</Link>*/}
		{/*	</Menu.Item>*/}
		{/*	<Menu.Item key={InvoicePath.LIST}>*/}
		{/*		<DatabaseOutlined/>*/}
		{/*		<Link to={InvoicePath.LIST}>{t('internal.invoice.list.menu')}</Link>*/}
		{/*	</Menu.Item>*/}
		{/*</Menu.SubMenu>*/}
		<Menu.Divider/>
		<Menu.Item key='internal.logout' onClick={() => onLogout()} icon={<PoweroffOutlined/>}>
			{t('internal.logout.menu')}
		</Menu.Item>
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => {
			alert('logout!');
		}
	})
)(withTranslation()(MainMenu));
