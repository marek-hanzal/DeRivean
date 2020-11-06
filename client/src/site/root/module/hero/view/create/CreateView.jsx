import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	return (
		<HeroView>
			<HeroContext.Consumer>
				{({id, redux}) => (
					<CommonCreateView
						context={HeroContext}
						param={"kingdom"}
						defaultEnableSubmit={true}
					>
						<AttributeFieldEditor translation={id} redux={redux}/>
					</CommonCreateView>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default CreateView;
