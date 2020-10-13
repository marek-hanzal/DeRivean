import {HomeOutlined} from '@ant-design/icons';
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
			<Link to={Path.ROOT}>{t('pubic.home.menu')}</Link>
		</Menu.Item>
		<Menu.Divider/>
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
