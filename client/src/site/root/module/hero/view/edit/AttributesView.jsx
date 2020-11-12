import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import HeroView from "site/root/module/hero/view/HeroView";

const AttributesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.hero.attributes"]);
	return (
		<HeroView>
			<AttributesEditor/>
		</HeroView>
	);
};

export default AttributesView;
