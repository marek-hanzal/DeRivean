import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useContext} from "react";
import TranslationContext from "site/root/module/translation/component/TranslationContext";

const TranslationList = () => {
	const context = useContext(TranslationContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={context.link.home(record.id)} text={text}/>},
				{title: "language", width: 220},
				{title: "namespace", width: 220},
				{title: "label"},
			]}
		/>
	);
};

export default TranslationList;
