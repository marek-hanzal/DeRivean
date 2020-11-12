import OverallStatistics from "site/game/component/OverallStatistics";

const KingdomStatistics = ({show = ["buildings", "heroes"], action}) => {
	return <OverallStatistics show={show} action={action}/>;
};

export default KingdomStatistics;
