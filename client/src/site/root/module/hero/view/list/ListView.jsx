import BaseListView from "component/view/BaseListView";
import HeroList from "site/root/module/hero/component/HeroList";
import {BaseHeroView, HeroContext} from "site/root/module/hero/view/BaseHeroView";

const ListView = () => {
	return (
		<BaseHeroView>
			<BaseListView context={HeroContext}>
				<HeroList/>
			</BaseListView>
		</BaseHeroView>
	);
};

export default ListView;
