import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";

const AttributesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.user.attributes"]);
	return (
		<UserView>
			<UserContext.Consumer>
				{(currentContext) => (
					<AttributesEditor currentContext={currentContext}/>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default AttributesView;
