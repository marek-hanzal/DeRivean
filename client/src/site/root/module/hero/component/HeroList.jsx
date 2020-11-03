import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {HeroRedux} from "redux/hero/redux";
import Routes from "site/Routes";

const HeroList = () => {
	return (
		<BaseTable
			id={`root.hero.list.table`}
			redux={HeroRedux}
			param={"kingdom"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.hero.hero.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default HeroList;
