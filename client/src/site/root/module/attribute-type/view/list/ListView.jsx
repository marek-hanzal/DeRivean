import BaseListView from "component/view/BaseListView";
import AttributeTypeList from "site/root/module/attribute-type/component/AttributeTypeList";
import AttributeTypeView from "site/root/module/attribute-type/view/AttributeTypeView";

const ListView = () => {
	return (
		<AttributeTypeView>
			<BaseListView>
				<AttributeTypeList/>
			</BaseListView>
		</AttributeTypeView>
	);
};

export default ListView;
