import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import {
	isMenu,
	isMenuCollapsed
} from "redux/menu/selector";

const CollapsibleContent = (
	{
		isCollapsed,
		isMenu,
		children,
	}) =>
	<Layout.Content
		style={{
			minHeight:  "100vh",
			marginLeft: isMenu ? (isCollapsed ? 80 : 220) : 0,
		}}
		children={children}
	/>
;

export default connect(
	state => ({
		isCollapsed: isMenuCollapsed(state),
		isMenu:      isMenu(state),
	}),
)(CollapsibleContent);
