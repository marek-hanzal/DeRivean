import BaseTable from "component/table/BaseTable";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import BuildingPageRedux from "redux/building/page/redux";

const BuildingList = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const isLoading = useSelector(BuildingPageRedux.selector.isLoading);
	return (
		<BaseTable
			page={useSelector(BuildingPageRedux.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(BuildingPageRedux.fetch(params.kingdom, page, size))}
			id={`root.building.list.table`}
			isLoading={isLoading}
			columns={[]}
		/>
	);
};

export default BuildingList;
