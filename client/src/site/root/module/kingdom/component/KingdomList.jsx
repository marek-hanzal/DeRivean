import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {KingdomRedux} from "redux/kingdom/redux";
import Routes from "site/Routes";

const KingdomList = () => {
	return (
		<BaseTable
			id={`root.kingdom.list.table`}
			redux={KingdomRedux}
			param={"user"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.kingdom.kingdom.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default KingdomList;
