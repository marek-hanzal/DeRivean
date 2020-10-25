import {Layout} from "antd";
import {useSelector} from "react-redux";
import {isContentFullsize} from "redux/content/selector";
import {isMenuCollapsed} from "redux/menu/selector";

const CollapsibleContent = ({children}) => {
	const isCollapsed = useSelector(isMenuCollapsed);
	const isFullsize = useSelector(isContentFullsize);
	return (
		<Layout.Content
			style={{
				minHeight: "100vh",
				marginLeft: isFullsize ? 0 : (isCollapsed ? 80 : 220),
			}}
			children={children}
		/>
	);
};

export default CollapsibleContent;
