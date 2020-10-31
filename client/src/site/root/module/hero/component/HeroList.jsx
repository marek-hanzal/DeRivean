import BaseTable from "component/table/BaseTable";
import HistoryLink from "component/table/HistoryLink";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import HeroRedux from "redux/hero/redux";
import Routes from "site/Routes";

const HeroList = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const isLoading = useSelector(HeroRedux.redux.page.selector.isLoading);
	return (
		<BaseTable
			page={useSelector(HeroRedux.redux.page.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(HeroRedux.redux.page.dispatch.page(page, size, "kingdom", params.kingdom))}
			id={`root.hero.list.table`}
			isLoading={isLoading}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.heroContext.dashboard.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default HeroList;
