import {Card, Result} from "antd";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import {useTranslation} from "react-i18next";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const HomeView = () => {
	const {t} = useTranslation();
	useMenuOpen(["root.hero", "root.building"]);
	useMenuSelect(["root.kingdom"]);
	return (
		<KingdomView>
			<KingdomContext.Consumer>
				{({id, icon}) => (
					<Card title={t(`${id}.title`)}>
						<Result
							icon={icon}
							status={"info"}
						/>
					</Card>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default HomeView;
