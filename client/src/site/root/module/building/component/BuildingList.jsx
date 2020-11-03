import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {BuildingRedux} from "redux/building/redux";
import Routes from "site/Routes";

const BuildingList = () => {
	return (
		<BaseTable
			id={`root.building.list.table`}
			redux={BuildingRedux}
			param={"kingdom"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.building.building.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default BuildingList;
