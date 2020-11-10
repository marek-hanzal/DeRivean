import useMenuSelect from "hook/useMenuSelect";
import AttributesEditor from "site/root/component/AttributesEditor";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";

const AttributesView = () => {
	useMenuSelect(["root.hero.attributes"]);
	return (
		<HeroView>
			<HeroContext.Consumer>
				{(currentContext) => (
					<AttributesEditor currentContext={currentContext}/>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default AttributesView;
