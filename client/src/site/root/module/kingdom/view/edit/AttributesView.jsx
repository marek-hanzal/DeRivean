import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const AttributesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.kingdom.attributes"]);
	return (
		<KingdomView>
			<AttributesEditor/>
		</KingdomView>
	);
};

export default AttributesView;
