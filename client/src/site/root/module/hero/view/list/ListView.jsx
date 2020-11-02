import BaseListView from "component/view/BaseListView";
import HeroList from "site/root/module/hero/component/HeroList";
import RootView from "site/root/view/RootView";

const ListView = () => {
	return (
		<BaseListView
			id={"root.hero"}
			base={RootView}
		>
			<HeroList/>
		</BaseListView>
	);
};

export default ListView;
