import BaseListView from "component/view/BaseListView";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroList from "site/root/module/hero/component/HeroList";
import HeroView from "site/root/module/hero/view/HeroView";

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
