import {useParams} from "react-router";
import OverallStatistics from "site/root/component/OverallStatistics";
import {useUserStatisticsFetch} from "site/root/module/user/redux/redux";

const UserStatistics = () => {
	const params = useParams();
	return <OverallStatistics
		show={["kingdoms", "buildings", "heroes"]}
		action={events => {
			// eslint-disable-next-line
			useUserStatisticsFetch(params.user, events);
		}}
	/>;
};

export default UserStatistics;
