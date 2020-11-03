import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {BuildingRedux} from "redux/building/redux";
import Routes from "site/Routes";

const BuildingList = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const isLoading = useSelector(BuildingRedux.redux.page.selector.isLoading);
	return (
		<BaseTable
			page={useSelector(BuildingRedux.redux.page.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(BuildingRedux.redux.page.dispatch.page(page, size, "kingdom", params.kingdom))}
			id={`root.building.list.table`}
			isLoading={isLoading}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.building.building.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default BuildingList;
