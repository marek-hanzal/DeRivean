import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import UserView from "site/root/module/user/view/UserView";

const AttributesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.user.attributes"]);
	return (
		<UserView>
			<AttributesEditor groups={["user", "resource", "user.limit"]}/>
		</UserView>
	);
};

export default AttributesView;
