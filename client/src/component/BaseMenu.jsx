import {Menu} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {onOpenMenu} from '../redux/menu/open/action';
import {getOpenMenu} from '../redux/menu/open/selector';

const BaseMenu = (
	{
		open = [],
		selected = [],
		openState,
		onOpenChange,
		children,
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
		{children}
	</Menu>
;

export default connect(
	state => ({
		openState: getOpenMenu(state),
	}),
	dispatch => ({
		onOpenChange: open => dispatch(onOpenMenu(open)),
	})
)(withTranslation()(BaseMenu));
