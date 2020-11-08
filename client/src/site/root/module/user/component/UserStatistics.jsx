import {useParams} from "react-router";
import {useUserStatisticsFetch} from "redux/user/redux";
import OverallStatistics from "site/root/component/OverallStatistics";

const UserStatistics = () => {
	const params = useParams();
	return <OverallStatistics
		show={["kingdoms", "buildings", "heroes"]}
		action={(onSuccess, onFailure, onReason) => {
			// eslint-disable-next-line
			useUserStatisticsFetch(params.user, onSuccess, onFailure, onReason);
		}}
	/>;
};

export default UserStatistics;
