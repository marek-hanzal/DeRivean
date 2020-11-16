import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const ResourcesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.kingdom.attributes.resources"]);
	return (
		<KingdomView>
			<AttributesEditor/>
		</KingdomView>
	);
};

export default ResourcesView;
