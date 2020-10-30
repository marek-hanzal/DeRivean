import HistoryLink from "component/table/HistoryLink";
import BaseListView from "component/view/BaseListView";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import KingdomPageRedux from "redux/kingdom/page/redux";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import Routes from "site/Routes";

const ListView = (props) => {
	const dispatch = useDispatch();
	const params = useParams();
	return (
		<BaseListView
			base={KingdomView}
			id={"root.userContext.kingdom"}
			page={useSelector(KingdomPageRedux.selector.getPayload)}
			onPage={(page, size = 100) => dispatch(KingdomPageRedux.fetch(params.user, page, size))}
			isLoading={useSelector(KingdomPageRedux.selector.isLoading)}
			{...props}
			columns={[
				{title: "id", width: 380, render: (text, record) => <HistoryLink to={Routes.root.kingdomContext.dashboard.link(record.id)} text={text}/>},
				{title: "name"},
			]}
		/>
	);
};

export default ListView;
