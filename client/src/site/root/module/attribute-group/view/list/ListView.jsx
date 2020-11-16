import BaseListView from "component/view/BaseListView";
import AttributeGroupList from "site/root/module/attribute-group/component/AttributeGroupList";
import AttributeGroupView from "site/root/module/attribute-group/view/AttributeGroupView";

const ListView = () => {
	return (
		<AttributeGroupView>
			<BaseListView>
				<AttributeGroupList/>
			</BaseListView>
		</AttributeGroupView>
	);
};

export default ListView;
