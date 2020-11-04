import {SmileOutlined} from "@ant-design/icons";
import {Result} from "antd";
import {useTranslation} from "react-i18next";
import OverallStatistics from "site/root/component/OverallStatistics";

const HomeDashboard = () => {
	const {t} = useTranslation();
	return (
		<Result
			icon={<SmileOutlined/>}
			status={"info"}
			title={t("root.home.content.title")}
			subTitle={t("root.home.content.subtitle")}
			children={<OverallStatistics/>}
		/>
	);
};

export default HomeDashboard;
