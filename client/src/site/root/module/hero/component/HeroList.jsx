import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useContext} from "react";
import HeroContext from "site/root/module/hero/component/HeroContext";

const HeroList = () => {
	const context = useContext(HeroContext);
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

export default HeroList;
