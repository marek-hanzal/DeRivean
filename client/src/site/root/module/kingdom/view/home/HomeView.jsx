import useMenuOpen from "hook/useMenuOpen";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const HomeView = () => {
	useMenuOpen(["root.hero", "root.building"]);
	return (
		<KingdomView>
			<EditViewWithAttributes
				context={KingdomContext}
				param={"kingdom"}
				enableSubmit={true}
			/>
		</KingdomView>
	);
};

export default HomeView;
