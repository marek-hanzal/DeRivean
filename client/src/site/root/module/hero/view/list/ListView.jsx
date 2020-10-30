import BaseListView from "component/view/BaseListView";
import HeroView from "site/root/module/hero/view/HeroView";
import defaultPage from "utils/page";

const ListView = () => {
	return (
		<BaseListView
			id={"root.hero"}
			base={HeroView}
			page={defaultPage}
			onPage={() => ({})}
			items={[]}
		/>
	);
};

export default ListView;
