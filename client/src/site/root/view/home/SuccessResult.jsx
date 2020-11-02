import {SmileOutlined} from "@ant-design/icons";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

const SuccessResult = () => {
	const {t} = useTranslation();
	return (
		<Result
			icon={<SmileOutlined/>}
			status={"info"}
			title={t("root.home.content.title")}
			subTitle={t("root.home.content.subtitle")}
		/>
	);
};

export default SuccessResult;
