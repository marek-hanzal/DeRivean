import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useContext} from "react";
import {KingdomContext} from "site/root/module/kingdom/view/BaseKingdomView";
import Routes from "site/Routes";

const KingdomList = () => {
	const context = useContext(KingdomContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			param={"user"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.kingdom.kingdom.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default KingdomList;
