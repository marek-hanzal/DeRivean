import CommonEditView from "site/common/view/CommonEditView";
import HeroView from "site/root/module/hero/view/HeroView";

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
