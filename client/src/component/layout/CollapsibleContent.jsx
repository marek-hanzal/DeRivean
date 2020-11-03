import {Layout} from "antd";
import {useSelector} from "react-redux";
import {ContentRedux} from "redux/content/redux";
import {MenuRedux} from "redux/menu/redux";

const CollapsibleContent = ({children}) => {
	const isCollapsed = useSelector(MenuRedux.selector.isCollapsed);
	const isFullsize = useSelector(ContentRedux.selector.isFullsize);
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
