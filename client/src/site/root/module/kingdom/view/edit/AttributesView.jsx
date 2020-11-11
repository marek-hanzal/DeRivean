import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const AttributesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.kingdom.attributes"]);
	return (
		<KingdomView>
			<KingdomContext.Consumer>
				{(currentContext) => (
					<AttributesEditor currentContext={currentContext}/>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default AttributesView;
