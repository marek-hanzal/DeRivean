import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const CommonView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.kingdom.attributes.common"]);
	return (
		<KingdomView>
			<AttributesEditor
				groups={["kingdom", "resource"]}
			/>
		</KingdomView>
	);
};

export default CommonView;
