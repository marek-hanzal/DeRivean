import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<HeroView>
			<HeroContext.Consumer>
				{({id, redux}) => (
					<CommonEditView
						context={HeroContext}
						param={"hero"}
						defaultEnableSubmit={true}
					>
						<AttributeFieldEditor translation={id} redux={redux}/>
					</CommonEditView>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default EditView;
