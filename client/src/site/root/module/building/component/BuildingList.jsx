import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useContext} from "react";
import BuildingContext from "site/root/module/building/component/BuildingContext";

const BuildingList = () => {
	const context = useContext(BuildingContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			param={"kingdom"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={context.link.home(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default BuildingList;
