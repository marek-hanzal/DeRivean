import {Card} from "antd";
import {useTranslation} from "react-i18next";
import BuildingList from "site/root/module/building/component/BuildingList";
import BuildingView from "site/root/module/building/view/BuildingView";

const ListView = () => {
	const {t} = useTranslation();
	return (
		<BuildingView
			base={BuildingView}
			id={"root.building"}
			menu={"root.building.list"}
		>
			<Card title={t(`building.list.title`)}>
				<BuildingList/>
			</Card>
		</BuildingView>
	);
};

export default ListView;
