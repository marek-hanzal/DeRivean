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
						readyCount={1}
						children={<AttributeFieldEditor translation={id} redux={redux}/>}
					/>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default CreateView;
