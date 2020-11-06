import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {Link} from "react-router-dom";
import HeroContext from "site/root/module/hero/component/HeroContext";

const HeroList = () => {
	const context = useContext(HeroContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			param={"kingdom"}
			columns={[
				{title: "id", width: 380, render: (text, record) => <Link to={context.link.home(record.id)} children={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default HeroList;
