import {SmileOutlined} from "@ant-design/icons";
import {Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import RootView from "site/root/view/RootView";

const HomeView = () => {
	const {t} = useTranslation();
	return (
		<RootView
			id={"root.home"}
			open={["root.blog", "root.user"]}
		>
			<Card title={t("root.home.title")}>
				<Result
					icon={<SmileOutlined/>}
					status={"info"}
					title={t("root.home.content.title")}
					subTitle={t("root.home.content.subtitle")}
				/>
			</Card>
		</RootView>
	);
};
export default HomeView;
