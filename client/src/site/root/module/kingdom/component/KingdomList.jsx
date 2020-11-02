import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import KingdomRedux from "redux/kingdom/redux";
import Routes from "site/Routes";

const KingdomList = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const isLoading = useSelector(KingdomRedux.redux.page.selector.isLoading);
	return (
		<BaseTable
			page={useSelector(KingdomRedux.redux.page.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(KingdomRedux.redux.page.dispatch.page(page, size, "user", params.user))}
			id={`root.kingdom.list.table`}
			isLoading={isLoading}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.kingdom.context.kingdom.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default KingdomList;
