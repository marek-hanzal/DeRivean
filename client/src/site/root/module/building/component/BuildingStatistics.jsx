import OverallStatistics from "site/root/component/OverallStatistics";

const BuildingStatistics = ({show = ["buildings"], action}) => {
	return <OverallStatistics show={show} action={action}/>;
};

export default BuildingStatistics;
