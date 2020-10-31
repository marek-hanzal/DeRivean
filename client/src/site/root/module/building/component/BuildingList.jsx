import BaseTable from "component/table/BaseTable";
import {useDispatch, useSelector} from "react-redux";
import BuildingPageRedux from "redux/building/page/redux";

const BuildingList = () => {
	const dispatch = useDispatch();
	return (
		<BaseTable
			page={useSelector(BuildingPageRedux.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(BuildingPageRedux.fetch(page, size))}
			id={`root.building.list.table`}
			columns={[]}
		/>
	);
};

export default BuildingList;
