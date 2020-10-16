import {HomeOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BaseMenu from '../../../component/BaseMenu';
import PublicPath from "../router/Path";

const MainMenu = (
	{
		t,
	}) =>
	<BaseMenu>
		<Menu.Item key={PublicPath.root} icon={<HomeOutlined/>}>
			<Link to={PublicPath.root}>{t('public.home.menu')}</Link>
		</Menu.Item>
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({})
)(withTranslation()(MainMenu));
