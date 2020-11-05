import OverallStatistics from "site/root/component/OverallStatistics";

const HeroStatistics = ({show = ["heroes"], action}) => {
	return <OverallStatistics show={show} action={action}/>;
};

export default HeroStatistics;
