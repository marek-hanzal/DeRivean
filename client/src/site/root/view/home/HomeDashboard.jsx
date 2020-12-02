import {SmileOutlined} from "@ant-design/icons";
import {Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import OverallStatistics from "../../component/OverallStatistics";

const HomeDashboard = () => {
	const {t} = useTranslation();
	return (
		<Result
			icon={<SmileOutlined/>}
			status={"info"}
			title={t("root.home.content.title")}
			subTitle={t("root.home.content.subtitle")}
			children={
				<Card style={{textAlign: "center"}}>
					<OverallStatistics/>
				</Card>
			}
		/>
	);
};

export default HomeDashboard;
