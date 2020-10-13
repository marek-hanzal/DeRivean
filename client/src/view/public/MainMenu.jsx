import {HomeOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BaseMenu from '../../component/common/BaseMenu';
import Path from './Path';

const MainMenu = (
	{
		open = [],
		selected = [],
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
			<Link to={Path.ROOT}>{t('public.home.menu')}</Link>
		</Menu.Item>
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({})
)(withTranslation()(MainMenu));
