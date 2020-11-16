import BaseListView from "component/view/BaseListView";
import AttributeTypeList from "site/root/module/attribute-type/component/AttributeTypeList";

const ListView = () => {
	return (
		<AttributeTypeList>
			<BaseListView>
				<AttributeTypeList/>
			</BaseListView>
		</AttributeTypeList>
	);
};

export default ListView;
