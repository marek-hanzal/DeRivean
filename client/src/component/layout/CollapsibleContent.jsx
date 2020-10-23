import {Layout} from "antd";
import {connect} from "react-redux";
import {isContentFullsize} from "redux/content/selector";
import {isMenuCollapsed} from "redux/menu/selector";

const CollapsibleContent = (
	{
		isCollapsed,
		children,
		isFullsize,
	}) =>
	<Layout.Content
		style={{
			minHeight: "100vh",
			marginLeft: isFullsize ? 0 : (isCollapsed ? 80 : 220),
		}}
		children={children}
	/>
;

export default connect(
	state => ({
		isCollapsed: isMenuCollapsed(state),
		isFullsize: isContentFullsize(state),
	}),
)(CollapsibleContent);
