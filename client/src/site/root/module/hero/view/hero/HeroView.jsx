import {BaseHeroView, HeroContext} from "site/root/module/hero/view/BaseHeroView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const HeroView = () => {
	return (
		<BaseHeroView>
			<EditViewWithAttributes
				context={HeroContext}
				formName={"hero"}
				param={"hero"}
				open={[]}
				enableSubmit={true}
			/>
		</BaseHeroView>
	);
};

export default HeroView;
