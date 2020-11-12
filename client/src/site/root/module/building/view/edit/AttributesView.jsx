import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import BuildingView from "site/root/module/building/view/BuildingView";

const AttributesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.building.attributes"]);
	return (
		<BuildingView>
			<AttributesEditor/>
		</BuildingView>
	);
};

export default AttributesView;
