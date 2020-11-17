import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import AttributesEditor from "site/root/component/AttributesEditor";
import {useAttributeGroupNameFetch} from "site/root/module/attribute-group/hook/hook";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const ResourcesView = () => {
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(["root.kingdom.attributes.resources"]);
	return (
		<KingdomView>
			<AttributesEditor
				outputMapper={values => ({...values, group: "resources"})}
				useAttributeFetch={(_, events) => {
					// eslint-disable-next-line
					useAttributeGroupNameFetch("resources", events);
				}}
			/>
		</KingdomView>
	);
};

export default ResourcesView;
