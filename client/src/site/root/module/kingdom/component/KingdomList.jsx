import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {Link} from "react-router-dom";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";

const KingdomList = () => {
	const context = useContext(KingdomContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			param={"user"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <Link to={context.link.home.link(record.id)} children={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default KingdomList;
