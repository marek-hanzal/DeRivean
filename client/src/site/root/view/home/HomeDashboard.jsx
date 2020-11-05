import {SmileOutlined} from "@ant-design/icons";
import {Result} from "antd";
import {useTranslation} from "react-i18next";
import {StatisticsRedux} from "redux/statistics/redux";
import OverallStatistics from "site/root/component/OverallStatistics";

const HomeDashboard = () => {
	const {t} = useTranslation();
	return (
		<Result
			icon={<SmileOutlined/>}
			status={"info"}
			title={t("root.home.content.title")}
			subTitle={t("root.home.content.subtitle")}
			children={<OverallStatistics action={cancelToken => StatisticsRedux.redux.statistics.dispatch.statistics(cancelToken)}/>}
		/>
	);
};

export default HomeDashboard;
