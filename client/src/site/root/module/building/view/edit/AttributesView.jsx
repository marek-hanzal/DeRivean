import useMenuSelect from "hook/useMenuSelect";
import AttributesEditor from "site/root/component/AttributesEditor";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";

const AttributesView = () => {
	useMenuSelect(["root.building.attributes"]);
	return (
		<BuildingView>
			<BuildingContext.Consumer>
				{(currentContext) => (
					<AttributesEditor currentContext={currentContext}/>
				)}
			</BuildingContext.Consumer>
		</BuildingView>
	);
};

export default AttributesView;
