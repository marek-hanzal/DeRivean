import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const EditView = () => {
	return (
		<HeroView>
			<EditViewWithAttributes
				context={HeroContext}
				param={"hero"}
				defaultEnableSubmit={true}
			/>
		</HeroView>
	);
};

export default EditView;
