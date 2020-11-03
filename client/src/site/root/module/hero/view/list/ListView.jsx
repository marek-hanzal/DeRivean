import BaseListView from "component/view/BaseListView";
import HeroList from "site/root/module/hero/component/HeroList";
import {HeroContext, HeroView} from "site/root/module/hero/view/HeroView";

const ListView = () => {
	return (
		<HeroView>
			<BaseListView context={HeroContext}>
				<HeroList/>
			</BaseListView>
		</HeroView>
	);
};

export default ListView;
