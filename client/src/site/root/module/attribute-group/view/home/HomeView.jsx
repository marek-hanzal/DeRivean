import CommonHomeView from "site/common/view/CommonHomeView";
import AttributeGroupView from "site/root/module/attribute-group/view/AttributeGroupView";

const HomeView = () => {
	return (
		<AttributeGroupView>
			<CommonHomeView
				menu={"root.attribute-group"}
			>
				{data => null}
			</CommonHomeView>
		</AttributeGroupView>
	);
};

export default HomeView;
