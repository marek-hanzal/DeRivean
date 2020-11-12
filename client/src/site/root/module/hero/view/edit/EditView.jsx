import HeroView from "site/root/module/hero/view/HeroView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<HeroView>
			<CommonEditView
				defaultEnableSubmit={true}
			/>
		</HeroView>
	);
};

export default EditView;
