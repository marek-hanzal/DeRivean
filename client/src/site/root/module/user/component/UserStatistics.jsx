import {useParams} from "react-router";
import {UserRedux} from "redux/user/redux";
import OverallStatistics from "site/root/component/OverallStatistics";

const UserStatistics = () => {
	const params = useParams();
	return <OverallStatistics
		show={["kingdoms", "buildings", "heroes"]}
		action={cancelToken => UserRedux.redux.statistics.dispatch.fetch(params.user, cancelToken)}
	/>;
};

export default UserStatistics;
