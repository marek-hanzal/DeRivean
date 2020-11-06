import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {Link} from "react-router-dom";
import TranslationContext from "site/root/module/translation/component/TranslationContext";

const TranslationList = () => {
	const context = useContext(TranslationContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			columns={[
				{title: "id", width: 380, render: (text, record) => <Link to={context.link.home.link(record.id)} children={text}/>},
				{title: "language", width: 160},
				{title: "namespace", width: 160},
				{title: "label"},
			]}
		/>
	);
};

export default TranslationList;
