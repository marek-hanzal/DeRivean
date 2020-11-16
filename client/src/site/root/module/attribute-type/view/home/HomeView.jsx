import CommonHomeView from "site/common/view/CommonHomeView";
import AttributeTypeView from "site/root/module/attribute-type/view/AttributeTypeView";

const HomeView = () => {
	return (
		<AttributeTypeView>
			<CommonHomeView
				menu={"root.attribute-type"}
			>
				{data => null}
			</CommonHomeView>
		</AttributeTypeView>
	);
};

export default HomeView;
