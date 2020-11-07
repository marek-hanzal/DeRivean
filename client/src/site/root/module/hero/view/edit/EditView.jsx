import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<HeroView>
			<HeroContext.Consumer>
				{() => (
					<CommonEditView
						context={HeroContext}
						param={"hero"}
						defaultEnableSubmit={true}
					/>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default EditView;
