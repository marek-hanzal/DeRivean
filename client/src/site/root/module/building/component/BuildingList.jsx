import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {Link} from "react-router-dom";
import BuildingContext from "site/root/module/building/component/BuildingContext";

const BuildingList = () => {
	const context = useContext(BuildingContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			param={"kingdom"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <Link to={context.link.home.link(record.id)} children={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default BuildingList;
